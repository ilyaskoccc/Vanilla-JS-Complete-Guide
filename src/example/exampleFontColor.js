export function exampleFontColor() {
  /* In JavaScript, the fontcolor() method is a deprecated method that wraps a string in an 
  HTML <font> tag with a color attribute, allowing you to specify the text color. 
  Both the fontcolor() method and the <font> tag are obsolete and should not be used in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.fontcolor(); // → Attention this method is deprecated.
  let totalContext2 = context1.fontcolor("blue"); // → Attention this method is deprecated.
  let totalContext3 = context1.fontcolor("red"); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const fontColorDiv = document.createElement("div");

  // Appending data type results to the div
  fontColorDiv.innerHTML = `
                          <br/>
                          <h2>-FontColor() → Attention this method is deprecated.</h2>
                          <p>Context → ${context1}</p>
                          <p>Output FontColor() → ${totalContext1}</p>
                          <p>Output FontColor(blue) → ${totalContext2}</p>
                          <p>Output FontColor(red) → ${totalContext3}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(fontColorDiv);
}
// To see the output, call the function like this:
// exampleFontColor();
