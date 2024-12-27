export function exampleSlice() {
  /* slice() -> The slice() method copies the values within a specific range of a defined variable based on the provided parameters, 
creates a new content, and returns the created value. */

  // Variable initialization
  let context = "Ilyas Koc JavaScript";

  // valid example
  let totalContext = context.slice(5); // "Ilyas" deleted

  // Creating a div to append all the data type information
  const sliceDiv = document.createElement("div");

  // Appending data type results to the div
  sliceDiv.innerHTML = `
    <br/>
    <h2>-Slice()</h2>
      <p>Context : ${context}</p>
      <p>Output Slice : ${totalContext}</p>
    `;

  // Appending the div to the body
  document.body.appendChild(sliceDiv);
}
// To see the output, call the function like this:
// exampleSlice();
