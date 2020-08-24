import React from "react";

import "./Navbar.css";

function Navbar({
  mergeSort,
  quickSort,
  insertionSort,
  bubbleSort,
  selectionSort,
}) {
  return (
    <div className="navbar">
      <div className="generate-array">
        <button onClick={() => window.location.reload(false)}>
          Generate New Array
        </button>
      </div>
      <div className="buttons">
        <button onClick={mergeSort}>Merge Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={insertionSort}>Insertion Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={selectionSort}>Selection Sort</button>
      </div>
    </div>
  );
}

export default Navbar;
