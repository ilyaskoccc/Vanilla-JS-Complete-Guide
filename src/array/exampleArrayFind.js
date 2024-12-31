export function exampleArrayFind() {
  // Find
  const womenNames = ["Aslı", "Banu", "Hatice"];
  const result = womenNames.find((name) => {
    return name == "Banu";
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                                <br/>
                                <h2>-Find</h2>
                                <p>WomenNames → ${womenNames.join(", ")} </p>  
                                <p>Find "Banu" Find → ${result} </p>  
                                `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
