export function exampleMathPI() {
  // PI
  const pi = Math.PI;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Math.PI</h2>
                          <p>PI → ${pi} </p> 
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
