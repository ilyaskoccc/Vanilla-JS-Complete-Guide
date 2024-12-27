export function exampleString() {
  /* The String() function converts a given value into a string. It can handle various data types such as numbers, 
  booleans, objects, arrays, or null and undefined. */

  // Variable initialization
  let exampleOne = Boolean(0);
  let exampleTwo = Boolean(1);
  let exampleThree = 8;
  let exampleFour = 8.55;
  let exampleFive = ["Ilyas", "Koc"];
  let exampleSix;
  let exampleSeven = new Date();

  // valid example
  let changeTo1 = String(exampleOne); // Boolean false -> String "false"
  let changeTo2 = String(exampleTwo); // Boolean true -> String "true"
  let changeTo3 = String(exampleThree); // Number 8 -> String "8"
  let changeTo4 = String(exampleFour); // Number 8.55 -> String "8.55"
  let changeTo5 = String(exampleFive); // Array [Ilyas, Koc] -> String "Ilyas, Koc"
  let changeTo6 = String(exampleSix); // Undefined -> String "undefined"
  let changeTo7 = String(exampleSeven); // Date Object -> String "date"

  // Creating a div to append all the data type information
  const stringDiv = document.createElement("div");

  // Appending data type results to the div
  stringDiv.innerHTML = `
                <br/>
                <h2>-String()</h2>
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
                <p>exampleSix : ${exampleSix} → TypeOf : ${typeof exampleSix}</p>
                <p>Output changeTo6 : ${changeTo6} → TypeOf : ${typeof changeTo6}</p><br/>
                <p>exampleSeven : ${exampleSeven} → TypeOf : ${typeof exampleSeven}</p>
                <p>Output changeTo7 : ${changeTo7} → TypeOf : ${typeof changeTo7}</p>
                `;

  // Appending the div to the body
  document.body.appendChild(stringDiv);
}
// To see the output, call the function like this:
// exampleString();
