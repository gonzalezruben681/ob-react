import React, { useState } from "react";
import { getNumbers } from "../../services/observableService";

const ObservableExample = () => {
  const [number, SetNumber] = useState(0);

  const obtainNewNumbers = () => {
    console.log("subscription to Observable");
    getNumbers.subscribe({
      // esto es como el then de una promise
      next(newNumber) {
        console.log("New number:", newNumber);
        SetNumber(newNumber);
      },
      error(error) {
        alert(`Something went wrong: ${error}`);
        console.log("Error in observable");
      },
      complete() {
        alert(`finished with: ${number}`);
        console.log("Done with the observable");
      },
    });
  };

  return (
    <div>
      <h1>Observables </h1>
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumbers}>Obtain new Number</button>
    </div>
  );
};

export default ObservableExample;
