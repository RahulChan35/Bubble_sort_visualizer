import { useState } from "react";

export default function BubbleSort() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const generateRandomArray = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);
  };
  const [array, setArray] = useState(generateRandomArray(20));

  async function bubbleSort() {
    const arrayCopy = [...array];
    const n = arrayCopy.length;

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    for (let i = 0; i < n - 1; i++) {
      setI(i);
      for (let j = i + 1; j < n; j++) {
        setJ(j);
        await sleep(100);

        if (arrayCopy[i] > arrayCopy[j]) {
          // Swap the elements
          const temp = arrayCopy[i];
          arrayCopy[i] = arrayCopy[j];
          arrayCopy[j] = temp;

          // Update the array state to show the swap
          await sleep(100);
          setArray(arrayCopy);
        }
      }
    }
    setIsSorted(true);
  }

  return (
    <div>
      <div className="container">
        {array.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                height: `${5 * item}px`,
                width: "10px",
                backgroundColor: `${
                  !isSorted && (idx == i || idx == j) ? "green" : "blue"
                }`,
                margin: "2px",
              }}
            ></div>
          );
        })}
      </div>
      <center>
        <button onClick={bubbleSort}>BUBBLE SORT</button>
      </center>
    </div>
  );
}
