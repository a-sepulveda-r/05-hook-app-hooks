import React, { useState } from "react";

export const CounterApp = () => {
  //   const [counter, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //     counter3: 30,
  //   });
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <h1>{counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 - 1,
          });
        }}
      >
        +1
      </button>
    </>
  );
};
