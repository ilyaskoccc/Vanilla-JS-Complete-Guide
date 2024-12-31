export function exampleMathLog2E() {
  // LOG2E
  const eulerTwo = Math.LOG2E;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-Math.LOG2E</h2>
                      <p>Euler log 2 → ${eulerTwo} </p> 
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
