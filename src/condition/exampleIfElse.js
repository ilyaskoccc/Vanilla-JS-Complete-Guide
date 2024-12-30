export function exampleIfElse() {
  /* The if-else if-else statement in JavaScript allows for decision-making in code by evaluating multiple conditions in sequence. 
    It executes the first block of code where the condition evaluates to true. 
    If none of the conditions are true, the else block (if present) executes.
    
    //example

    if (condition1) {
        // Code to execute if condition1 is true
    } else if (condition2) {
        // Code to execute if condition2 is true
    } else {
        // Code to execute if none of the above conditions are true
    }
    */

  // Variable initialization
  const score = 85;
  let result;

  // valid example
  if (score >= 90) {
    result = "Grade: A";
  } else if (score >= 80) {
    result = "Grade: B";
  } else if (score >= 70) {
    result = "Grade: C";
  } else {
    result = "Grade: F";
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-IF-Else</h2>
                      <p>Score → ${score}</p>
                      <p>Result → ${result}</p>
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
