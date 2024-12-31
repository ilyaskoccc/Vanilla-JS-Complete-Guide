export function exampleArrayPop() {
  // Pop
  const colors = ["Black", "White", "Red"];
  const arrayPop = colors.pop();

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-Pop</h2>
                              <p>Array Pop → ${arrayPop} </p>   
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
