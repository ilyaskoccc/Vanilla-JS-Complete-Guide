export function exampleSmall() {
  /* In JavaScript, the small() method is a deprecated method that was used to wrap the string content in 
    HTML <small> tags, making the text appear smaller. 
    This method is no longer recommended and is considered obsolete in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.small(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const smallDiv = document.createElement("div");

  // Appending data type results to the div
  smallDiv.innerHTML = `
                      <br/>
                      <h2>-Small() → Attention this method is deprecated.</h2>
                      <p>Context → ${context1}</p>
                      <p>Output Small → ${totalContext1}</p>
                      `;

  // Appending the div to the body
  document.body.appendChild(smallDiv);
}
// To see the output, call the function like this:
// exampleSmall();
