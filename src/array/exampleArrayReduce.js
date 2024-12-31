export function exampleArrayReduce() {
  // Reduce
  const numbers = [100, 200, 300, 400, 500];

  // Correctly using reduce to sum all numbers
  const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // Initial value is 0

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and calling the function
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Reduce</h2>
                            <p>Numbers → ${numbers} </p>  
                            <p>Reduce → ${result} </p>  
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
