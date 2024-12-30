export function exampleToLocaleLowerCase() {
  /* In JavaScript, the toLocaleLowerCase() method is used to convert a string to lowercase, 
    considering locale-specific case mappings. This is particularly useful for languages that 
    have specific rules for letter case transformations, 
    such as Turkish, where the lowercase form of certain characters may differ. */

  // Variable initialization
  let context1 = "ĞÜŞIÖÇ";

  // valid example
  let totalContext1 = context1.toLocaleLowerCase();

  // Creating a div to append all the data type information
  const toLocaleLowerCaseDiv = document.createElement("div");

  // Appending data type results to the div
  toLocaleLowerCaseDiv.innerHTML = `
                                  <br/>
                                  <h2>-ToLocaleLowerCase()</h2>
                                  <p>Context → ${context1}</p>
                                  <p>Output ToLocaleLowerCase → ${totalContext1}</p>
                                  `;

  // Appending the div to the body
  document.body.appendChild(toLocaleLowerCaseDiv);
}
// To see the output, call the function like this:
// exampleToLocaleLowerCase();
