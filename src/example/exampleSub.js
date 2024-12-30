export function exampleSub() {
  /* In JavaScript, the sub() method is a legacy method used to create a new string where the content is wrapped in 
    HTML <sub> tags. This method is deprecated and should not be used in modern JavaScript. 
    It was originally used for rendering text as subscript, typically in mathematical expressions. */

  // Variable initialization
  let context1 = "H";
  let context2 = "2";
  let context3 = "O";

  // valid example
  let totalContext1 = context2.sub(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const subDiv = document.createElement("div");

  // Appending data type results to the div
  subDiv.innerHTML = `
                                    <br/>
                                    <h2>-Sub() → Attention this method is deprecated.</h2>
                                    <p>Context → ${
                                      context1 + context2 + context3
                                    }</p>
                                    <p>Output Sub → ${
                                      context1 + totalContext1 + context3
                                    }</p>
                                    `;

  // Appending the div to the body
  document.body.appendChild(subDiv);
}
// To see the output, call the function like this:
// exampleSub();
