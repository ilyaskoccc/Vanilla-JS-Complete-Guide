export function exampleMathSqrt1_2() {
  // SQRT1_2
  const sqrt1_2 = Math.SQRT1_2;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Math.SQRT1_2</h2>
                            <p>SQRT1_2 → ${sqrt1_2} </p> 
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
