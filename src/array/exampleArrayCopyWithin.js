export function exampleArrayCopyWithin() {
  // CopyWithin
  const colors = ["Black", "White", "Red"];
  const arrayCopyWithin = colors.copyWithin(0, 1, 2);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                            <br/>
                            <h2>-CopyWithin</h2>
                            <p>CopyWithin → ${arrayCopyWithin.join(", ")} </p>
                            <p>New Array → ${colors.join(", ")} </p>    
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
