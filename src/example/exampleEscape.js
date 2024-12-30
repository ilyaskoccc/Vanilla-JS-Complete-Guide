export function exampleEscape() {
  /* The escape() function in JavaScript was historically used to encode a string by escaping certain characters, 
    replacing them with their percent-encoded equivalents. However, it is deprecated and should not be used in modern JavaScript. 
    It doesn't handle all Unicode characters properly and may not be suitable for encoding URIs in a standardized way. */

  // Variable initialization
  let context1 = "'\"^%&()=?";

  // valid example
  let totalContext1 = escape(context1); // But this method deprecated.

  // Creating a div to append all the data type information
  const escapeDiv = document.createElement("div");

  // Appending data type results to the div
  escapeDiv.innerHTML = `
                        <br/>
                        <h2>-Escape() → Attention this method is deprecated.</h2>
                        <p>Context → ${context1}</p>
                        <p>Output escape → ${totalContext1}</p>
                        `;

  // Appending the div to the body
  document.body.appendChild(escapeDiv);
}
// To see the output, call the function like this:
// exampleEscape();
