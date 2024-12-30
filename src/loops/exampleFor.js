export function exampleFor() {
  /* The for loop in JavaScript is used to execute a block of code for a specific number of times.
    It includes initialization, condition, and increment in a single line.
            
            for (initialization; condition; increment) {
                // Code to execute
            }
    */

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Variable initialization
  let message;

  // Appending data type results to the div
  printDiv.innerHTML = `
      <br/>
      <h2>-For</h2>
      <p>Start i → 0</p>
    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  // For loop example
  for (let i = 0; i < 6; i++) {
    message = i;

    // Appending data type results to the div for each iteration
    const loopDiv = document.createElement("div");
    if (i == 5) {
      loopDiv.innerHTML = `<p>Loops Stop → ${i}</p>`;
    } else {
      loopDiv.innerHTML = `<p>I → ${i}</p>`;
    }

    // Appending the new div to the body
    document.body.appendChild(loopDiv);
  }
}
