import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CourseGoals from "./components/CourseGoals";

function App() {
  return (
    <div className="App">
      <CourseGoals title={""} description={""} id={0}></CourseGoals>
    </div>
  );
}

export default App;
