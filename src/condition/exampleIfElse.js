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

  // example-2
  // Variable initialization
  const hours = 8;
  let data = typeof hours;
  let message;

  // valid example
  if (hours >= 0 && hours <= 5 && data == "number") {
    if (hours == 0) {
      message = "Good Morning. Hour it is 00:00";
    } else if (hours == 1) {
      message = "Good Morning. Hour it is 01:00";
    } else if (hours == 2) {
      message = "Good Morning. Hour it is 02:00";
    } else if (hours == 3) {
      message = "Good Morning. Hour it is 03:00";
    } else if (hours == 4) {
      message = "Good Morning. Hour it is 04:00";
    } else if (hours == 5) {
      message = "Good Morning. Hour it is 05:00";
    } else {
      message = "Good Morning. But transaction is incorrect.";
    }
  } else if (hours > 5 && hours <= 16 && data == "number") {
    if (hours == 6) {
      message = "Have a nice day. Hour it is 06:00";
    } else if (hours == 7) {
      message = "Have a nice day. Hour it is 07:00";
    } else if (hours == 8) {
      message = "Have a nice day. Hour it is 08:00";
    } else if (hours == 9) {
      message = "Have a nice day. Hour it is 09:00";
    } else if (hours == 10) {
      message = "Have a nice day. Hour it is 10:00";
    } else if (hours == 11) {
      message = "Have a nice day. Hour it is 11:00";
    } else {
      message = "Good Afternoon.";
    }
  } else if (hours > 16 && hours <= 24 && data == "number") {
    if (hours == 17) {
      message = "Good Afternoon. Hour it is 17:00";
    } else if (hours == 18) {
      message = "Good Afternoon. Hour it is 18:00";
    } else if (hours == 19) {
      message = "Good Afternoon. Hour it is 19:00";
    } else if (hours == 20) {
      message = "Good Afternoon. Hour it is 20:00";
    } else if (hours == 21) {
      message = "Good Afternoon. Hour it is 21:00";
    } else if (hours == 22) {
      message = "Good Afternoon. Hour it is 22:00";
    } else {
      message = "Good Night.";
    }
  } else {
    message = "Transaction is incorrect. Check the hour and data.";
  }
  // Creating a div to append all the data type information
  const printDiv1 = document.createElement("div");

  // Appending data type results to the div
  printDiv1.innerHTML = `
                       <br/>
                       <p>Hours → ${hours}</p>
                       <p>Message → ${message}</p>
                       `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
  document.body.appendChild(printDiv1);
}
