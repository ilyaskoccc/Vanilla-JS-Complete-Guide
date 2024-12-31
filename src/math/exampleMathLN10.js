export function exampleMathLN10() {
  // LN10
  const logTen = Math.LN10;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                    <br/>
                    <h2>-Math.LN10</h2>
                    <p>Log 10 → ${logTen} </p> 
                    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
