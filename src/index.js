import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Star color="pink" isFilled />
      <Star color="indigo" />
      <Star color="purple" isFilled />
      <h2> Rating Component: </h2>
      <Rating stars={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
