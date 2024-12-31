export function exampleArrayLastIndexOf() {
  // LastIndexOf
  const womenNames = ["Aslı", "Banu", "Hatice", "Banu"];
  const result = womenNames.lastIndexOf("Banu");

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-LastIndexOf</h2>
                              <p>WomenNames → ${womenNames.join(", ")} </p>  
                              <p>Find "Banu" LastIndexOf → ${result} </p>  
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
