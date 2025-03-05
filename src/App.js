import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import CounterCard from "./component/ConunterCard";
import StudentCard from "./component/StudentsCard";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ram Kumar",
      class: "BCA",
      subStream: "CS",
    },
    {
      name: "Shatrughan Kumar",
      class: "12",
      subStream: "Art",
    },
    {
      name: "Bharat Kumar",
      class: "10",
      subStream: "Mathematics",
    },
    {
      name: "Lakshman",
      class: "11",
      subStream: "Art",
    },
  ]);

  useEffect(() => {}, []);
  return (
    <>
      {/* <React.Fragment> */}
      {/* <Fragment> */}
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
      {/* </Fragment> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
