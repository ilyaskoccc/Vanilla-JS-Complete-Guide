export function exampleFixed() {
  /* In JavaScript, the fixed() method is a deprecated method that wraps a string in 
  HTML <tt> (teletype) tags along with the style="position:fixed" attribute. 
  It was used to display text in a fixed-width font and position the text with a fixed layout. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.fixed(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const fixedDiv = document.createElement("div");

  // Appending data type results to the div
  fixedDiv.innerHTML = `
                          <br/>
                          <h2>-Fixed() → Attention this method is deprecated.</h2>
                          <p>Context → ${context1}</p>
                          <p>Output Fixed → ${totalContext1}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(fixedDiv);
}
// To see the output, call the function like this:
// exampleFixed();
