export function exampleTernary() {
  /* The ternary operator in JavaScript, also known as the conditional operator, is a concise way to write conditional expressions. 
    It evaluates a condition and returns one value if the condition is true and another if it is false.
    
      condition ? expressionIfTrue : expressionIfFalse
*/

  // Variable initialization
  const age = 20;

  // valid example
  const message = age >= 18 ? "Yes" : "No";

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Ternary</h2>
                          <p>Age → ${age}, Is 18 years older ?</p>
                          <p>Message → ${message}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
