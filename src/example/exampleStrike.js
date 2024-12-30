export function exampleStrike() {
  /* In JavaScript, the strike() method is a deprecated method that wraps a string in HTML <strike> tags, 
    making the text appear with a strikethrough. 
    This method is no longer recommended in modern web development, as the <strike> tag itself is also deprecated in HTML. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.strike(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const strikeDiv = document.createElement("div");

  // Appending data type results to the div
  strikeDiv.innerHTML = `
                          <br/>
                          <h2>-Strike() → Attention this method is deprecated.</h2>
                          <p>Context → ${context1}</p>
                          <p>Output Strike → ${totalContext1}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(strikeDiv);
}
// To see the output, call the function like this:
// exampleStrike();
