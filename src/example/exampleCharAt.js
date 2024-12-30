export function exampleCharAt() {
  /* The charAt() method in JavaScript is used to retrieve the character at a specified index in a string. 
    It returns a single-character string representing the character at the given position. */

  // Variable initialization
  let context = "ILYAS KOC";

  // valid example
  let totalContext1 = context.charAt(0);
  let totalContext2 = context.charAt(1);
  let totalContext3 = context.charAt(2);
  let totalContext4 = context.charAt(3);
  let totalContext5 = context.charAt(4);
  let totalContext6 = context.charAt(6);
  let totalContext7 = context.charAt(7);
  let totalContext8 = context.charAt(8);

  // Creating a div to append all the data type information
  const charAtDiv = document.createElement("div");

  // Appending data type results to the div
  charAtDiv.innerHTML = `
                                <br/>
                                <h2>-CharAt()</h2>
                                <p>Context : ${context}</p><br>
                                <p>Output charAt(0) : ${totalContext1}</p>
                                <p>Output charAt(1) : ${totalContext2}</p>
                                <p>Output charAt(2) : ${totalContext3}</p>
                                <p>Output charAt(3) : ${totalContext4}</p>
                                <p>Output charAt(4) : ${totalContext5}</p><br>
                                <p>Output charAt(6) : ${totalContext6}</p>
                                <p>Output charAt(7) : ${totalContext7}</p>
                                <p>Output charAt(8) : ${totalContext8}</p>
                                `;

  // Appending the div to the body
  document.body.appendChild(charAtDiv);
}
// To see the output, call the function like this:
// exampleCharAt();
