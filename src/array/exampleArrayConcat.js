export function exampleArrayConcat() {
  // Concat
  const menNames = ["Volkan", "Hakan", "Onur"];
  const womenNames = ["Aslı", "Banu", "Hatice"];
  const concatNames = menNames.concat(womenNames);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Concat</h2>
                        <p>menNames → ${menNames.join(", ")} </p> 
                        <p>womenNames → ${womenNames.join(", ")} </p>  
                        <p>concatNames → ${concatNames.join(", ")} </p>   
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
