export function exampleMathLog10E() {
  // LOG10E
  const eulerTwo = Math.LOG10E;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Math.LOG10E</h2>
                        <p>Euler log 10 → ${eulerTwo} </p> 
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
