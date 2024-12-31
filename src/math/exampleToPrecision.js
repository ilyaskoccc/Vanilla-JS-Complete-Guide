export function exampleToPrecision() {
  // toPrecision()

  const variable = 4.325231213456;
  const change = variable.toPrecision(2);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-toPrecision()</h2>
                      <p>Original Variable → ${variable}</p>
                      <p>toPrecision(2) → ${change}</p>
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
