export function exampleMaxValue() {
  // MAX_VALUE
  const max = Number.MAX_VALUE;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                            <br/>
                            <h2>-MAX_VALUE</h2>
                            <p>MAX_VALUE → ${max} </p> 
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
