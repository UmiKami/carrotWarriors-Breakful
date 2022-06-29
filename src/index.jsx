import React from "react";
import ReactDOM from "react-dom/client";

// use require() to apply styles when using react and webpack
require("./styles/style.css");

const Index = () => {
  return (
    <div className="mainContainer">
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
