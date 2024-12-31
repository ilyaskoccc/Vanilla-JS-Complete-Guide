export function exampleNegativeInfinity() {
  // NEGATIVE_INFINITY
  const negInfinity = Number.NEGATIVE_INFINITY;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                                <br/>
                                <h2>-NEGATIVE_INFINITY</h2>
                                <p>NEGATIVE_INFINITY → ${negInfinity} </p> 
                                `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
