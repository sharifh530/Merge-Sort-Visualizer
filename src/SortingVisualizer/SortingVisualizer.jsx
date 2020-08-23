import React, { useState } from "react";
import array from "../data";

import "./SortingVisualizer.css";

function SortingVisualizer() {
  const [updateArray, setUpdateArray] = useState(array);

  return (
    <div className="array-container">
      {updateArray.map((value, inx) => (
        <div
          className="array-bar"
          key={inx}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button onClick={() => window.location.reload(false)}>
        Generate New Array
      </button>
      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button>Heap Sort</button>
      <button>Bubble Sort</button>
    </div>
  );
}

export default SortingVisualizer;
