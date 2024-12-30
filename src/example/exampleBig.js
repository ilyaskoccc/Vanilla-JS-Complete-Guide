export function exampleBig() {
  /* In JavaScript, the big() method is a deprecated method that was used to wrap the content of a string in 
    HTML <big> tags, which would make the text appear larger. 
    This method is part of the legacy HTML methods and is no longer recommended for use in modern web development. */

  // Variable initialization
  let context1 = "JavaScript";

  // valid example
  let totalContext1 = context1.big(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const bigDiv = document.createElement("div");

  // Appending data type results to the div
  bigDiv.innerHTML = `
                    <br/>
                    <h2>-Big() → Attention this method is deprecated.</h2>
                    <p>Context → ${context1}</p>
                    <p>Output Big → ${totalContext1}</p>
                    `;

  // Appending the div to the body
  document.body.appendChild(bigDiv);
}
// To see the output, call the function like this:
// exampleBig();
