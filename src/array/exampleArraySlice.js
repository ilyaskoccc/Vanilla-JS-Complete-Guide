export function exampleArraySlice() {
  // Slice
  const colors = ["Black", "White", "Red"];
  const arraySlice = colors.slice(1);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Slice</h2>
                          <p>Array Slice → ${arraySlice} </p>
                          <p>New Array → ${colors.join(", ")} </p>    
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
