export function exampleSwitchCase() {
  /* The switch statement in JavaScript is used to execute one of many blocks of code based on the value of an expression. 
  It provides a more readable way to handle multiple cases compared to using multiple if-else statements.
  
    switch (expression) {
        case value1:
            // Code to execute if expression === value1
            break;
        case value2:
            // Code to execute if expression === value2
            break;
        default:
            // Code to execute if none of the cases match
        }
    */

  // Variable initialization
  const fruit = "apple";
  let message;

  // valid example
  switch (fruit) {
    case "banana":
      message = "Bananas are yellow.";
      break;
    case "apple":
      message = "Apples are red or green.";
      break;
    case "orange":
      message = "Oranges are orange.";
      break;
    default:
      message = "Unknown fruit.";
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Switch Case</h2>
                        <p>Fruit → ${fruit}</p>
                        <p>Message → ${message}</p>
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
