import './styles.css';
import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "./emojipedia";


//Add more Emoji in "emojipedia.js"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Dictionary)}</dl>
    </div>
  );
}

export default App;
