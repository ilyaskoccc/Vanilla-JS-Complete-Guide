export function exampleArrayPush() {
  // Push
  const colors = ["Black", "White", "Red"];
  const arrayPush = colors.push("Yellow");

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                                <br/>
                                <h2>-Push</h2>
                                <p>Array Push → ${arrayPush} </p>
                                <p>New Array → ${colors.join(", ")} </p>    
                                `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
