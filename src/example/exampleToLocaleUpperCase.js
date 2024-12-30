export function exampleToLocaleUpperCase() {
  /* In JavaScript, the toLocaleUpperCase() method is used to convert a string to uppercase, 
    taking into account the locale-specific case mappings. This is particularly useful when you want to handle 
    uppercase transformations that depend on the language or region 
    (e.g., Turkish has special rules for the uppercase version of certain letters). */

  // Variable initialization
  let context1 = "ğüşiöç";

  // valid example
  let totalContext1 = context1.toLocaleUpperCase();

  // Creating a div to append all the data type information
  const toLocaleUpperCaseDiv = document.createElement("div");

  // Appending data type results to the div
  toLocaleUpperCaseDiv.innerHTML = `
                                <br/>
                                <h2>-ToLocaleUpperCase() → e.g., Turkish has special rules for the uppercase version of certain letters</h2>
                                <p>Context → ${context1}</p>
                                <p>Output ToLocaleUpperCase → ${totalContext1}</p>
                                `;

  // Appending the div to the body
  document.body.appendChild(toLocaleUpperCaseDiv);
}
// To see the output, call the function like this:
// exampleToLocaleUpperCase();
