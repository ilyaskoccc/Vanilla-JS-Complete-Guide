export function exampleArrayFindIndex() {
  // FindIndex
  const womenNames = ["Aslı", "Banu", "Hatice"];
  const result = womenNames.findIndex((name) => {
    return name == "Banu";
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                                  <br/>
                                  <h2>-FindIndex</h2>
                                  <p>WomenNames → ${womenNames.join(
                                    ", "
                                  )} </p>  
                                  <p>FindIndex "Banu" FindIndex → ${result} </p>  
                                  `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
