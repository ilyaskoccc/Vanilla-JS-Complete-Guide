export function exampleEndsWith() {
  /* The endsWith() method in JavaScript is used to check if a string ends with a specified suffix. 
It returns true if the string ends with the given value, and false if it does not. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.endsWith("Ilyas"); // True - Because End The Text Ilyas

  // Creating a div to append all the data type information
  const endsWithDiv = document.createElement("div");

  // Appending data type results to the div
  endsWithDiv.innerHTML = `
                            <br/>
                            <h2>-EndsWith()</h2>
                              <p>Context : ${context}</p>
                              <p>Output text end to "Ilyas" : ${totalContext1}</p>
                              `;

  // Appending the div to the body
  document.body.appendChild(endsWithDiv);
}
// To see the output, call the function like this:
// exampleEndsWith();
