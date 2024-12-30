export function exampleToUpperCase() {
  /* In JavaScript, the toUpperCase() method is used to convert all the characters in a string to uppercase. */

  // Variable initialization
  let context1 = "Ilyas Koc";

  // valid example
  let totalContext1 = context1.toUpperCase();

  // Creating a div to append all the data type information
  const toUpperCaseDiv = document.createElement("div");

  // Appending data type results to the div
  toUpperCaseDiv.innerHTML = `
                            <br/>
                            <h2>-ToUpperCase()</h2>
                            <p>Context → ${context1}</p>
                            <p>Output ToUpperCase → ${totalContext1}</p>
                            `;

  // Appending the div to the body
  document.body.appendChild(toUpperCaseDiv);
}
// To see the output, call the function like this:
// exampleToUpperCase();
