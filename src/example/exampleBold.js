export function exampleBold() {
  /* In JavaScript, the bold() method is a deprecated method that was used to wrap a string in 
    HTML <b> tags, making the text appear bold. This method was part of legacy JavaScript methods 
    for formatting text and is no longer recommended for use in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.bold(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const boldDiv = document.createElement("div");

  // Appending data type results to the div
  boldDiv.innerHTML = `
                        <br/>
                        <h2>-Bold() → Attention this method is deprecated.</h2>
                        <p>Context → ${context1}</p>
                        <p>Output Bold → ${totalContext1}</p>
                        `;

  // Appending the div to the body
  document.body.appendChild(boldDiv);
}
// To see the output, call the function like this:
// exampleBold();
