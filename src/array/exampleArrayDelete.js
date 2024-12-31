export function exampleArrayDelete() {
  // Lenght
  const colors = ["Black", "White", "Red"];
  delete colors[0];

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Delete</h2>
                            <p>Array → ${colors.join(", ")} </p>   
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
