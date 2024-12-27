export function exampleTypeOf() {
  // typeof -> returns the data type of a variable.
  let name = "ilyas"; // String
  let number = 1; // Number
  let isMarried = false; // Boolean
  let favCars = ["BMW", "AUDI"]; // Array
  let cars = new Array("MERCEDES", "HONDA", "TOYOTA"); // Array (Object)
  let family = new Object(); // Object
  let nullVariable = null; // Object (special case for historical reasons)
  let unknownVariable; // Undefined
  let emptyString = ""; // String

  // Creating a div to append all the data type information
  const resultDiv = document.createElement("div");

  // Appending data type results to the div
  resultDiv.innerHTML = `
  <br/>
  <h2>-Typeof</h2>
    <p>name : ${typeof name}</p>
    <p>number : ${typeof number}</p>
    <p>isMarried : ${typeof isMarried}</p>
    <p>favCars : ${typeof favCars}</p>
    <p>cars : ${typeof cars}</p>
    <p>family : ${typeof family}</p>
    <p>nullVariable : ${typeof nullVariable}</p>
    <p>unknownVariable : ${typeof unknownVariable}</p>
    <p>emptyString : ${typeof emptyString}</p>
  `;

  // Appending the div to the body
  document.body.appendChild(resultDiv);
}

// To see the output, call the function like this:
// exampleTypeOf();
