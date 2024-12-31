export function exampleArrayIndexOf() {
  // IndexOf
  const womenNames = ["Aslı", "Banu", "Hatice"];
  const result = womenNames.indexOf("Aslı");

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                            <br/>
                            <h2>-IndexOf</h2>
                            <p>Find "Aslı" IndexOf → ${result} </p>  
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
