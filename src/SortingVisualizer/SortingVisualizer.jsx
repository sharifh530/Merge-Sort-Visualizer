import React, { useState } from "react";
import array from "../data";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSortAlgo";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSortAlgo";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSortAlgo";

import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

const mergeSort = () => {
  const animations = getMergeSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};

const quickSort = () => {
  const [animations, sortArray] = getQuickSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] == "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [comparision, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [swap, barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
  // this.setState({array: sortArray})
  const RESTORE_TIME = parseInt(
    (ANIMATION_SPEED_MS * animations.length) / 2 + 3000
  );
};

const bubbleSort = () => {
  const [animations, sortArray] = getBubbleSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] == "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [comparision, barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [swap, barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
  // this.setState({array: sortArray})
  const RESTORE_TIME = parseInt(
    (ANIMATION_SPEED_MS * animations.length) / 2 + 3000
  );
  setTimeout(() => this.restoreStoreButtons(), RESTORE_TIME);
};

function SortingVisualizer() {
  return (
    <div>
      <div className="buttons">
        <button onClick={() => window.location.reload(false)}>
          Generate New Array
        </button>
        <button onClick={mergeSort}>Merge Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button>Heap Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
      </div>
      <div className="array-container">
        {array.map((value, inx) => (
          <div
            className="array-bar"
            key={inx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
