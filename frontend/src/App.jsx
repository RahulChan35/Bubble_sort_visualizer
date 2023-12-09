// import React from 'react'
import { useState } from "react";
import BubbleSort from "./assets/Algorithms/BubbleSort";
import PathFinder from "./assets/Algorithms/PathFinder";

const App = () => {
  const [options, setOptions] = useState(["bubble sort", "path finder"]);
  const [currentOption, setCurrentOption] = useState("path finder");

  const onOptionChangeHandler = (e) => {
    setCurrentOption(e.target.value);
  };

  return (
    <div>
      <select onChange={onOptionChangeHandler}>
        {options.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>

      {(() => {
        switch (currentOption) {
          case "bubble sort":
            return <BubbleSort />;
          case "path finder":
            return <PathFinder />;
        }
      })()}
    </div>
  );
};

export default App;
