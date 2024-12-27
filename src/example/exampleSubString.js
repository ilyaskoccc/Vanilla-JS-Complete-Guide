export function exampleSubString() {
  /* The substring() method copies the values within a specific range of a defined variable based on the provided parameters, 
creates new content, and returns the created value.*/

  // Variable initialization
  let context = "Ilyas Koc JavaScript";

  // valid example
  let totalContext = context.substring(5); // "Ilyas" deleted

  // Creating a div to append all the data type information
  const substringDiv = document.createElement("div");

  // Appending data type results to the div
  substringDiv.innerHTML = `
      <br/>
      <h2>-Substring()</h2>
        <p>Context : ${context}</p>
        <p>Output Substring : ${totalContext}</p>
      `;

  // Appending the div to the body
  document.body.appendChild(substringDiv);
}
// To see the output, call the function like this:
// exampleSubString();
