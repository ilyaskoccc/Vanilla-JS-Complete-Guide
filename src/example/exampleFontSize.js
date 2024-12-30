export function exampleFontSize() {
  /* In JavaScript, the fontsize() method is a deprecated method that wraps a string in an 
  HTML <font> tag with a size attribute, allowing you to specify the font size of the text. 
  Both the fontsize() method and the <font> tag are considered obsolete and are not recommended for use in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.fontsize(); // → Attention this method is deprecated.
  let totalContext2 = context1.fontsize(5); // → Attention this method is deprecated.
  let totalContext3 = context1.fontsize(6); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const fontSizeDiv = document.createElement("div");

  // Appending data type results to the div
  fontSizeDiv.innerHTML = `
                            <br/>
                            <h2>-FontSize() → Attention this method is deprecated.</h2>
                            <p>Context → ${context1}</p>
                            <p>Output FontSize() → ${totalContext1}</p>
                            <p>Output FontSize(5) → ${totalContext2}</p>
                            <p>Output FontSize(6) → ${totalContext3}</p>
                            `;

  // Appending the div to the body
  document.body.appendChild(fontSizeDiv);
}
// To see the output, call the function like this:
// exampleFontSize();
