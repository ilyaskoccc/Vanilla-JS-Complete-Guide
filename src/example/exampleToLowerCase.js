export function exampleToLowerCase() {
  /* In JavaScript, the toLowerCase() method is used to convert all the characters in a string to lowercase. */

  // Variable initialization
  let context1 = "Ilyas Koc";

  // valid example
  let totalContext1 = context1.toLowerCase();

  // Creating a div to append all the data type information
  const toLowerCaseDiv = document.createElement("div");

  // Appending data type results to the div
  toLowerCaseDiv.innerHTML = `
                              <br/>
                              <h2>-ToLowerCase()</h2>
                              <p>Context → ${context1}</p>
                              <p>Output ToLowerCase → ${totalContext1}</p>
                              `;

  // Appending the div to the body
  document.body.appendChild(toLowerCaseDiv);
}
// To see the output, call the function like this:
// exampleToLowerCase();
