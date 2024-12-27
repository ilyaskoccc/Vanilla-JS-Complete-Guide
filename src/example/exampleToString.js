export function exampleToString() {
  /* The toString() method converts the content of a variable into a string format and returns the converted value. */

  // Variable initialization
  let context = 5;

  // valid example
  let totalContext = context.toString(); // Number 5 -> String "5"

  // Creating a div to append all the data type information
  const toStringDiv = document.createElement("div");

  // Appending data type results to the div
  toStringDiv.innerHTML = `
              <br/>
              <h2>-ToString()</h2>
                <p>Context : ${context} → TypeOf : ${typeof context}</p>
                <p>Output ToString : ${totalContext} → TypeOf : ${typeof totalContext}</p>
              `;

  // Appending the div to the body
  document.body.appendChild(toStringDiv);
}
// To see the output, call the function like this:
// exampleToString();
