import React from "react";

function App() {
  const [currentTime, updateTime] = React.useState("Time");

  function getTime() {
    setInterval(() => {
      const time = new Date().toLocaleTimeString("en-US", { hour12: false });
      updateTime(time);
    }, 1000);
  }

  return (
    <div className="container">
      <h1> {currentTime} </h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
