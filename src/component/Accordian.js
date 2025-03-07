import React, { useState } from "react";
import Style from "./Accordian.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Accordian() {
  const [isOpen, setIsOpen] = useState(false);

  function handleAccordian() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className={Style.accordian}>
      <div>
        <h3>What will you teach me</h3>
        {!isOpen ? (
          <BsChevronDown onClick={handleAccordian} />
        ) : (
          <BsChevronUp onClick={handleAccordian} />
        )}
      </div>
      <p className={` ${isOpen ? Style.active : ""}`}>
        you will teach all about Coding & Programming
      </p>
    </div>
  );
}

export default Accordian;
