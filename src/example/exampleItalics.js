export function exampleItalics() {
  /* In JavaScript, the italics() method is a deprecated method that was used to wrap a string in HTML <i> tags, 
making the text appear in italic style. 
This method is considered obsolete and is no longer recommended for use in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.italics(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const italicsDiv = document.createElement("div");

  // Appending data type results to the div
  italicsDiv.innerHTML = `
                          <br/>
                          <h2>-Italics() → Attention this method is deprecated.</h2>
                          <p>Context → ${context1}</p>
                          <p>Output Italics → ${totalContext1}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(italicsDiv);
}
// To see the output, call the function like this:
// exampleItalics();
