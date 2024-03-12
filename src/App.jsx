import React, { useState, useEffect } from "react";

import Clock from "./components/Clock";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2>Digital Clock</h2>
        <Clock city="London" timeZone="Europe/London" />
        <Clock city="Dhaka" timeZone="Asia/Dhaka" />
      </div>
      <div>
        <h2>Timer</h2>
        <Timer />
      </div>
    </>
  );
}

export default App;
