export function exampleFunction() {
  /* In JavaScript, a function is a block of reusable code designed to perform a particular task. 
Functions allow you to group code into smaller, manageable pieces that can be executed whenever needed. They can take inputs (called parameters) and may return a result (called the return value).
      
        function functionName(parameters) {
            // Code to execute
            return value;  // Optional return statement
        }
  */

  // Create function
  function greet(name) {
    return `Hello, ${name}!`;
  }

  function add(a, b) {
    return a + b;
  }

  // Calling the function
  const sum = add(5, 3);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Function</h2>
                            <p>Message → ${greet("JavaScript")}</p>
                            <p>Sum → ${sum}</p>  
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
