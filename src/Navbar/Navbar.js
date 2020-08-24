import React from "react";

function Navbar({
  mergeSort,
  quickSort,
  insertionSort,
  bubbleSort,
  selectionSort,
}) {
  return (
    <div>
      <div className="buttons">
        <button onClick={() => window.location.reload(false)}>
          Generate New Array
        </button>
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
