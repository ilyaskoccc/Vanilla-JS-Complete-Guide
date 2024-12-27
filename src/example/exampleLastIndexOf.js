export function exampleLastIndexOf() {
  /* The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified value within a string or array. 
    It returns the index of the last match. If the value is not found, it returns -1. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext = context.lastIndexOf("a");

  // Creating a div to append all the data type information
  const lastIndexOfDiv = document.createElement("div");

  // Appending data type results to the div
  lastIndexOfDiv.innerHTML = `
                    <br/>
                    <h2>-LastIndexOf()</h2>
                      <p>Context : ${context}</p>
                      <p>Output find to index "a" : ${totalContext}</p>
                    `;

  // Appending the div to the body
  document.body.appendChild(lastIndexOfDiv);
}
// To see the output, call the function like this:
// exampleLastIndexOf();
