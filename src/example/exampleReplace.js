export function exampleReplace() {
  /* The replace() method in JavaScript is used to search for a specified pattern 
    (string or regular expression) in a string and replace it with a new substring. It returns a new string with the replacements made. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.replace("Ilyas", "John");

  // Creating a div to append all the data type information
  const replaceDiv = document.createElement("div");

  // Appending data type results to the div
  replaceDiv.innerHTML = `
                          <br/>
                          <h2>-Replace()</h2>
                          <p>Context : ${context}</p>
                          <p>Output text replace to "Ilyas" → "John" : ${totalContext1}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(replaceDiv);
}
// To see the output, call the function like this:
// exampleReplace();
