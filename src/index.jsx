import React from "react";
import ReactDOM from "react-dom/client";

// use require() to apply styles when using react and webpack
require("./styles/style.css");

const Index = () => {
  return (
    <div className="mainContainer">
      <h1>hello world</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
