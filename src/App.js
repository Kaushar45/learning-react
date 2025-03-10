import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import CounterCard from "./component/ConunterCard";
import StudentCard from "./component/StudentsCard";
import Navbar from "./component/Navbar";
import ConditionalRendering from "./component/ConditionalRendering";
import PopupModel from "./component/PopupModel";
import Accordian from "./component/Accordian";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ram Kumar",
      class: "BCA",
      subStream: "CS",
    },
    {
      name: "Lakshman",
      class: "11",
      subStream: "Art",
    },
    {
      name: "Bharat Kumar",
      class: "10",
      subStream: "Mathematics",
    },
    {
      name: "Shatrughan Kumar",
      class: "12",
      subStream: "Art",
    },
  ]);

  useEffect(() => {}, []);
  return (
    <>
      {/* <React.Fragment> */}
      {/* <Fragment> */}
      <Navbar />
      <secion style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </secion>

      <div className="main-container">
        <CounterCard />
        <CounterCard />
        <CounterCard />
        <CounterCard />
      </div>
      <div style={{ padding: "20px" }}>
        <h2>Students List</h2>
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}
        >
          {students.map((student, index) => (
            <StudentCard stdDetails={student} key={index} />
          ))}
        </div>
      </div>
      <ConditionalRendering />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        <PopupModel />
        <Accordian />
        <Accordian />
        <Accordian />
      </section>

      {/* </Fragment> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
