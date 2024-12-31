export function exampleArrayFill() {
  // Fill
  const colors = ["Black", "White", "Red"];
  const arrayFill = colors.fill("Orange", 1);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-Fill</h2>
                              <p>Fill → ${arrayFill.join(", ")} </p>  
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
