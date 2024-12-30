export function exampleSup() {
  /* In JavaScript, the sup() method is a legacy method that was used to wrap the string content in 
  HTML <sup> tags, making it display as superscript. 
  This method is deprecated and should no longer be used in modern JavaScript for formatting text. */

  // Variable initialization
  let context1 = "M";
  let context2 = "2";

  // valid example
  let totalContext1 = context2.sup(); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const supDiv = document.createElement("div");

  // Appending data type results to the div
  supDiv.innerHTML = `
                                      <br/>
                                      <h2>-Sup() → Attention this method is deprecated.</h2>
                                      <p>Context → ${context1 + context2}</p>
                                      <p>Output Sup → ${
                                        context1 + totalContext1
                                      }</p>
                                      `;

  // Appending the div to the body
  document.body.appendChild(supDiv);
}
// To see the output, call the function like this:
// exampleSup();
