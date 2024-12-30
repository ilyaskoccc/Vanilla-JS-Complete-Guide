export function exampleTryCatchFinallyThrow() {
  /* In JavaScript, the try, catch, finally, and throw statements are used for handling errors in a structured way. 
    They help ensure that your program can handle exceptions without crashing.
      
        try {
            // Code that may throw an exception
            // throw new Error("Error");
        } catch (error) {
            // Code to handle the error
        } finally {
            // Code that will run no matter what (optional)
        }
*/

  // Variable initialization
  const age = 15;
  let message;
  let messageFinally;

  // valid example
  try {
    if (age < 18) {
      throw new Error("You must be 18 or older."); // This will throw an error
    }
    message = "Access granted";
  } catch (error) {
    message = error.message; // Output: You must be 18 or older.
  } finally {
    messageFinally = "End of validation.";
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Try, Catch, Finally, Throw</h2>
                            <p>Age → ${age}, Is 18 years older ?</p>
                            <p>Message → ${message}</p>
                            <p>Finally → ${messageFinally}</p>
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
