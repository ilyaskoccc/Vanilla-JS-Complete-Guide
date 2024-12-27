export function exampleStartsWith() {
  /* The startsWith() method in JavaScript is used to check if a string starts with a specified prefix. 
    It returns true if the string starts with the given value, and false if it does not. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.startsWith("Ilyas"); // True - Because Start The Text Ilyas

  // Creating a div to append all the data type information
  const startsWithDiv = document.createElement("div");

  // Appending data type results to the div
  startsWithDiv.innerHTML = `
                          <br/>
                          <h2>-StartsWith()</h2>
                            <p>Context : ${context}</p>
                            <p>Output text start to "Ilyas" : ${totalContext1}</p>
                            `;

  // Appending the div to the body
  document.body.appendChild(startsWithDiv);
}
// To see the output, call the function like this:
// exampleStartsWith();
