import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// use require() to apply styles when using react and webpack
require("./styles/style.css");

const Index = () => {
  const [time, setTime] = useState(60);

  chrome.runtime.sendMessage({ time: 60 }, function (response) {
    console.log(response);
  });

  return (
    <div className="mainContainer">
      <h2 className="pageTitle">Time for a break</h2>
      <h1 className="time">00h : 00m : {time}s</h1>
      <button className="endBreakBtn">End Break</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
