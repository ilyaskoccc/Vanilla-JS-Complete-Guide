export function exampleWhile() {
  /* The while loop in JavaScript is used to execute a block of code as long as a specified condition evaluates to true. 
    The loop will continue to run until the condition becomes false.
            
            while (condition) {
                // Code to execute
            }
    */

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Variable initialization
  let i = 0;
  let message;

  // Appending data type results to the div
  printDiv.innerHTML = `
      <br/>
      <h2>-While</h2>
      <p>Start i → ${i}</p>
    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  // valid example
  while (i < 5) {
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
  }
}
