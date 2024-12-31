export function exampleArrayValueOf() {
  // ValueOf
  const womenNames = ["Aslı", "Banu", "Hatice"];
  const result = womenNames.valueOf();

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                          <br/>
                          <h2>-ValueOf</h2>
                          <p>Result → ${result.join(", ")} </p>  
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
