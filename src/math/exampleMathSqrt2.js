export function exampleMathSqrt2() {
  // SQRT2
  const sqrt2 = Math.SQRT2;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-Math.SQRT2</h2>
                      <p>SQRT2 → ${sqrt2} </p> 
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
