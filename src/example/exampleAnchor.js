export function exampleAnchor() {
  /* In JavaScript, the anchor() method is a deprecated method that creates an 
    HTML <a> (anchor) element with a specified name attribute, making it possible to link to that anchor within a web page. 
    This method is rarely used in modern web development as better alternatives are available. */

  // Variable initialization
  const text = "Click here";

  // valid example
  const anchorString = text.anchor("myAnchor"); // → Attention this method is deprecated.
  console.log("-Anchor() → Attention this method is deprecated.", anchorString);

  // Creating a div to append all the data type information
  const anchorDiv = document.createElement("div");

  // Appending data type results to the div
  anchorDiv.innerHTML = `
                              <br/>
                              <h2>-Anchor() → Attention this method is deprecated.</h2>
                              <p>Text → ${text}</p>
                              <p>Wiev In Console ("Right Click → Inspect" Or "Press F12").</p>
                              `;

  // Appending the div to the body
  document.body.appendChild(anchorDiv);
}
// To see the output, call the function like this:
// exampleAnchor();
