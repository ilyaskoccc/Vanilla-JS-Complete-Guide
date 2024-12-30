export function exampleConditionFunction() {
  let process = "+";
  let result;

  // Create function
  function Addition(a, b) {
    return a + b;
  }

  function Subtraction(a, b) {
    return a - b;
  }

  function Division(a, b) {
    return a / b;
  }

  function Multiplication(a, b) {
    return a * b;
  }

  switch (process) {
    case "+":
      result = Addition(10, 5);
      break;
    case "-":
      result = Subtraction(10, 5);
      break;
    case "/":
      result = Division(10, 5);
      break;
    case "*":
      result = Multiplication(10, 5);
      break;
    default:
      result = "Warning, Error!";
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                              <br/>
                              <h2>-Function 2</h2>
                              <p>Process → Addition(10 + 5) </p>   
                              <p>Result → ${result} </p>   
                              `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
