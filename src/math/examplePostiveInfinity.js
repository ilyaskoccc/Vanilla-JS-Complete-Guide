export function examplePositiveInfinity() {
  // POSITIVE_INFINITY
  const posInfinity = Number.POSITIVE_INFINITY;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                              <br/>
                              <h2>-POSITIVE_INFINITY</h2>
                              <p>POSITIVE_INFINITY → ${posInfinity} </p> 
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
