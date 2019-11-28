import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const state = {
    winners: null,
    tournament: [
      [
        ["Pauet & Gonsal", "Mario & Pepelu"],
        null,
        ["Paco & Manolo", "Moko & Pepelu"],
        null,
        ["Caco & Pepe", "Peanut & Foo"],
        null,
        ["Loko & Alex", "Koko & Ble"]
      ],
      [null, ["? & ?", "? & ?"], null, null, null, ["? & ?", "? & ?"], null],
      [null, null, null, ["? & ?", "? & ?"], null, null, null]
    ]
  };

  if (state.winners) {
    return (
      <div className="winners">
        <div className="popup">
          <h1>🎉 Winners! 🎉</h1>
          <h2>{state.winners}</h2>
          <span className="cup" role="img">
            🏆
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <h1>⚽ Title 🏆</h1>
      </header>
      <div className="randomizer">
        <h3>Players:</h3>
        <textarea>Pauet,Gonsal,Mario,Pepelu,Alex,Paco</textarea>
        <button>Play</button>
      </div>

      <div className="App">
        <div className="table">
          {state.tournament.map(rounds =>
            rounds.map(match => {
              if (!match) {
                return <div />;
              }

              return (
                <div className="slot">
                  {match.map(players => (
                    <div className="team">{players}</div>
                  ))}
                </div>
              );
            })
          )}
        </div>
      </div>
      <footer className="crafted">
        <h3>
          Crafted with ❤️ using{" "}
          <a title="reffects" href="#pepe">
            reffects
          </a>
        </h3>
        <img
          src="https://emoji.slack-edge.com/T02AJ2PUS/reffects/bfc217d9857cd8b3.png"
          alt="reffects logo"
          height="40"
        />
      </footer>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
