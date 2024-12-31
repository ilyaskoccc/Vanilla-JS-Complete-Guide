export function exampleArrayShift() {
  // Shift
  const colors = ["Black", "White", "Red"];
  const arrayShift = colors.shift();

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-Shift</h2>
                              <p>Array Shift → ${arrayShift} </p>   
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
