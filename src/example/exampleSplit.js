export function exampleSplit() {
  /* The split() method in JavaScript is used to divide a string into an array of substrings based 
    on a specified separator. It returns an array containing the substrings. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.split("");

  // Creating a div to append all the data type information
  const splitDiv = document.createElement("div");

  // Appending data type results to the div
  splitDiv.innerHTML = `
                            <br/>
                            <h2>-Split()</h2>
                            <p>Context : ${context}</p>
                            <p>Output text split : ${totalContext1}</p>
                            `;

  // Appending the div to the body
  document.body.appendChild(splitDiv);
}
// To see the output, call the function like this:
// exampleSplit();
