import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <textarea>Pauet,Gonsal,Mario,Pepelu,Alex,Paco</textarea>
      <button>Randomize</button>

      <div className="table">
        <div className="slot arrow-down">1</div>
        <div className="slot">2</div>
        <div />
        <div />
        <div className="slot">3</div>
        <div className="slot arrow-up">4</div>

        <div />
        <div />
        <div className="slot arrow-straight">5</div>
        <div className="slot">6</div>
        <div />

        <div />
        <div />
        <div />
        <div className="slot">7</div>
        <div />
        <div />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
