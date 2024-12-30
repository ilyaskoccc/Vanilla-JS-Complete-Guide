export function exampleDoWhile() {
  /* The do while loop in JavaScript is used to execute a block of code at least once 
    before checking the specified condition.
            
            do {
                // Code to execute
            } while (condition);
    */

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Variable initialization
  let i = 0;
  let message;

  // Appending data type results to the div
  printDiv.innerHTML = `
      <br/>
      <h2>-Do While</h2>
      <p>Start i → ${i}</p>
    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  // Do-While loop example
  do {
    message = i;
    i++; // Increment i by 1

    // Appending data type results to the div for each iteration
    const loopDiv = document.createElement("div");
    if (i == 5) {
      loopDiv.innerHTML = `<p>Loops Stop → ${i}</p>`;
    } else {
      loopDiv.innerHTML = `<p>I → ${i}</p>`;
    }

    // Appending the new div to the body
    document.body.appendChild(loopDiv);
  } while (i < 5);
}
