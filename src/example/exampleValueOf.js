export function exampleValueOf() {
  /* The valueOf() method in JavaScript is used to return the primitive value of an object. 
    It is defined for all objects and is typically called internally by JavaScript, rather than being invoked explicitly. */

  // Variable initialization
  let contextOne = "5";
  let contextTwo = 5;

  // valid example
  let totalContext1 = contextOne.valueOf();
  let totalContext2 = contextTwo.valueOf();

  // Creating a div to append all the data type information
  const valueOfDiv = document.createElement("div");

  // Appending data type results to the div
  valueOfDiv.innerHTML = `
                <br/>
                <h2>-ValueOf()</h2>
                  <p>ContextOne : ${contextOne} → TypeOf : ${typeof contextOne}</p>
                  <p>Output totalContext1 : ${totalContext1} → TypeOf : ${typeof totalContext1}</p><br/>
                  <p>contextTwo : ${contextTwo} → TypeOf : ${typeof contextTwo}</p>
                  <p>Output totalContext2 : ${totalContext2} → TypeOf : ${typeof totalContext2}</p>
                `;

  // Appending the div to the body
  document.body.appendChild(valueOfDiv);
}
// To see the output, call the function like this:
// exampleValueOf();
