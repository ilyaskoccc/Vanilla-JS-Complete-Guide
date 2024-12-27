export function exampleEval() {
  // eval() -> evaluates the given input as JavaScript code and returns the result.

  // variable initialition
  let firstNumber = 10;
  let secondNumber = 40;

  // invalid example
  let totalNumber1 = "firstNumber + secondNumber";

  // valid example
  let totalNumber2 = eval("firstNumber + secondNumber");

  // Creating a div to append all the data type information
  const evalDiv = document.createElement("div");

  // Appending data type results to the div
  evalDiv.innerHTML = `
  <br/>
  <h2>-Eval()</h2>
    <h4>Variable Initialition</h4>
    <p>let firstNumber = 10;</p>
    <p>let secondNumber = 40;</p>
    <br>
    <h4>Invalid Example</h4>
    <p>let totalNumber1 = "firstNumber + secondNumber";</p>
    <p>Output: ${totalNumber1}</p>
    <br>
    <h4>Valid Example</h4>
    <p>let totalNumber2 = eval("firstNumber + secondNumber");</p>
    <p>Output: ${totalNumber2}</p>
  `;

  // Appending the div to the body
  document.body.appendChild(evalDiv);
}
// To see the output, call the function like this:
// exampleEval();
