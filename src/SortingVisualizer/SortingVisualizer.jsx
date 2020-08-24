import React from "react";
import array from "../data";

import Navbar from "../Navbar/Navbar";

import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSortAlgo";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSortAlgo";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSortAlgo";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionSortAlgo";
import { getSelectionSortAnimations } from "../sortingAlgorithms/selectionSortAlgo";

import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#f7d1ba";

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
  const [animations] = getQuickSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] === "comparision1" ||
      animations[i][0] === "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};

const bubbleSort = () => {
  const [animations] = getBubbleSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] === "comparision1" ||
      animations[i][0] === "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};

const insertionSort = () => {
  const [animations] = getInsertionSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] === "comparision1" ||
      animations[i][0] === "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [barIndex, newHeight] = animations[i];
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};

const selectionSort = () => {
  const [animations] = getSelectionSortAnimations(array);
  for (let i = 0; i < animations.length; i++) {
    const isColorChange =
      animations[i][0] === "comparision1" ||
      animations[i][0] === "comparision2";
    const arrayBars = document.getElementsByClassName("array-bar");
    if (isColorChange === true) {
      const color =
        animations[i][0] === "comparision1" ? SECONDARY_COLOR : PRIMARY_COLOR;
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      const [barIndex, newHeight] = animations[i];
      const barStyle = arrayBars[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
};

function SortingVisualizer() {
  return (
    <div>
      <Navbar
        mergeSort={mergeSort}
        quickSort={quickSort}
        insertionSort={insertionSort}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
      />
      <div className="main">
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
    </div>
  );
}

export default SortingVisualizer;
