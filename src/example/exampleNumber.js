export function exampleNumber() {
  /* number is a data type in JavaScript that represents numerical values. It can include both integers and floating-point numbers. 
    Special values like Infinity, -Infinity, and NaN (Not-a-Number) are also part of this type. */

  // Variable initialization
  let exampleOne = Boolean(0);
  let exampleTwo = Boolean(1);
  let exampleThree = 8;
  let exampleFour = 8.55;
  let exampleFive = new Date();

  // valid example
  let changeTo1 = Number(exampleOne); // Boolean false -> Number "false"
  let changeTo2 = Number(exampleTwo); // Boolean true -> Number "true"
  let changeTo3 = Number(exampleThree); // Number 8 -> Number "8"
  let changeTo4 = Number(exampleFour); // Number 8.55 -> Number "8.55"
  let changeTo5 = Number(exampleFive); // Date Object -> Number "date"

  // Creating a div to append all the data type information
  const numberDiv = document.createElement("div");

  // Appending data type results to the div
  numberDiv.innerHTML = `
                  <br/>
                  <h2>-Number()</h2>
                  <p>exampleOne : ${exampleOne} → TypeOf : ${typeof exampleOne}</p>
                  <p>Output changeTo1 : ${changeTo1} → TypeOf : ${typeof changeTo1}</p><br/>
                  <p>exampleTwo : ${exampleTwo} → TypeOf : ${typeof exampleTwo}</p>
                  <p>Output changeTo2 : ${changeTo2} → TypeOf : ${typeof changeTo2}</p><br/>
                  <p>exampleThree : ${exampleThree} → TypeOf : ${typeof exampleThree}</p>
                  <p>Output changeTo3 : ${changeTo3} → TypeOf : ${typeof changeTo3}</p><br/>
                  <p>exampleFour : ${exampleFour} → TypeOf : ${typeof exampleFour}</p>
                  <p>Output changeTo4 : ${changeTo4} → TypeOf : ${typeof changeTo4}</p><br/>
                  <p>exampleFive : ${exampleFive} → TypeOf : ${typeof exampleFive}</p>
                  <p>Output changeTo5 : ${changeTo5} → TypeOf : ${typeof changeTo5}</p><br/>
                  `;

  // Appending the div to the body
  document.body.appendChild(numberDiv);
}
// To see the output, call the function like this:
// exampleNumber();
