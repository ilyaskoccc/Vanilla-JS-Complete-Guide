export function exampleMathE() {
  // E
  const euler = Math.E;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                                <br/>
                                <h2>-Math.E</h2>
                                <p>Euler Number → ${euler} </p> 
                                `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
