export function exampleArrayReverse() {
  // Reverse
  const numbers = [100, 200, 300, 400, 500];
  const revNum = numbers.reverse();

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Reverse</h2> 
                        <p>Reverse → ${revNum} </p>  
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
