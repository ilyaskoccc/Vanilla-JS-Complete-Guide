export function exampleArrayLenght() {
  // Lenght
  const colors = ["Black", "White", "Red"];
  const colorsLength = colors.length;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Length</h2>
                          <p>Array → ${colors.join(", ")} </p>   
                          <p>Length → ${colorsLength} </p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
