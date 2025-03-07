import React, { useState } from "react";
import Style from "./PopupModel.module.css";

function PopupModel() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopUp() {
    setIsPopupOpen((prevState) => !prevState);
  }

  return (
    <div>
      <button onClick={handlePopUp}>Show Model</button>

      <section
        className={`${Style.popupContainer} ${
          isPopupOpen ? Style.popupActive : ""
        }`}
      >
        <div>
          <h3>Are you looking for Coding Institute</h3>
          <div>
            <button onClick={handlePopUp}>Cancel</button>
            <button>Visit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopupModel;
