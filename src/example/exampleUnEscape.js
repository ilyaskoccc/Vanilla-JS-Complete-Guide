export function exampleUnEscape() {
  /* The unescape() function in JavaScript was historically used to decode percent-encoded characters 
  in a string that was encoded with escape(). However, just like escape(), unescape() is deprecated and should 
  no longer be used in modern JavaScript, as it does not fully support Unicode and has some limitations in handling certain characters. */

  // Variable initialization
  let context1 = "%27%22%5E%25%26%28%29%3D%3F";

  // valid example
  let totalContext1 = unescape(context1); // But this method deprecated.

  // Creating a div to append all the data type information
  const unEscapeDiv = document.createElement("div");

  // Appending data type results to the div
  unEscapeDiv.innerHTML = `
                          <br/>
                          <h2>-Unescape() → Attention this method is deprecated.</h2>
                          <p>Context → ${context1}</p>
                          <p>Output Unescape → ${totalContext1}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(unEscapeDiv);
}
// To see the output, call the function like this:
// exampleUnEscape();
