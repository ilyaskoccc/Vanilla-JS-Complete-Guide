export function exampleMinValue() {
  // MIN_VALUE
  const min = Number.MIN_VALUE;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                              <br/>
                              <h2>-MIN_VALUE</h2>
                              <p>MIN_VALUE → ${min} </p> 
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
