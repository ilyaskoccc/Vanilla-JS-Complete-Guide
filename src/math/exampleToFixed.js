export function exampleToFixed() {
  // toFixed()

  const variable = 4.325231213456;
  const change = variable.toFixed(2);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                    <br/>
                    <h2>-toFixed()</h2>
                    <p>Original Variable → ${variable}</p>
                    <p>toFixed(2) → ${change}</p>
                    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
