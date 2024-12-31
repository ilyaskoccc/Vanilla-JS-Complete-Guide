export function exampleMathLN2() {
  // LN2
  const logTwo = Math.LN2;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                                  <br/>
                                  <h2>-Math.LN2</h2>
                                  <p>Log 2 → ${logTwo} </p> 
                                  `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
