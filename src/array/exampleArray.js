export function exampleArray() {
  let names = ["John", "Mark", "Wesley"]; // this is array

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-Array</h2>
                              <p>Names → ${names.join(", ")} </p>   
                              <p>Array[0] → ${names[0]} </p>   
                              <p>Array[1] → ${names[1]} </p> 
                              <p>Array[2] → ${names[2]} </p> 
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  names[0] = "Ilyas"; // CHANGE names[0] "John" → "Ilyas" new variable assignment

  // Creating a div to append all the data type information
  const printDiv1 = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv1.innerHTML = `
                                <br/>
                                <h4>-New Variable Assignment</h4>
                                <p>Names → ${names.join(", ")} </p>   
                                <p>Array[0] → ${names[0]} </p>   
                                <p>Array[1] → ${names[1]} </p> 
                                <p>Array[2] → ${names[2]} </p> 
                                `;

  // Appending the div to the body
  document.body.appendChild(printDiv1);
}
