export function exampleArraySort() {
  // Sort
  const numbers = [500, 200, 50, 256, 45];
  const sortNum = numbers.sort((a, b) => {
    return a - b;
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-Sort</h2> 
                      <p>Numbers → ${numbers} </p>  
                      <p>Sort → ${sortNum} </p>  
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
