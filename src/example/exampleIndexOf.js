export function exampleIndexOf() {
  /* The indexOf() method in JavaScript is used to find the first occurrence of a specified value within a string or array. 
    It returns the index of the first match. If the value is not found, it returns -1. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext = context.indexOf("a");

  // Creating a div to append all the data type information
  const indexOfDiv = document.createElement("div");

  // Appending data type results to the div
  indexOfDiv.innerHTML = `
                  <br/>
                  <h2>-IndexOf()</h2>
                    <p>Context : ${context}</p>
                    <p>Output find to index "a" : ${totalContext}</p>
                  `;

  // Appending the div to the body
  document.body.appendChild(indexOfDiv);
}
// To see the output, call the function like this:
// exampleIndexOf();
