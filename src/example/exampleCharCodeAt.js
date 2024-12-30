export function exampleCharCodeAt() {
  /* The charCodeAt() method in JavaScript is used to retrieve the Unicode value (character code) of the character 
    at a specified index in a string. It returns a number representing the Unicode value.*/

  // Variable initialization
  let context = "ILYAS KOC";

  // valid example
  let totalContext1 = context.charCodeAt(0); //-> 73
  let totalContext2 = context.charCodeAt(1); //-> 76
  let totalContext3 = context.charCodeAt(2); //-> 89
  let totalContext4 = context.charCodeAt(3); //-> 65
  let totalContext5 = context.charCodeAt(4); //-> 83
  let totalContext6 = context.charCodeAt(6); //-> 75
  let totalContext7 = context.charCodeAt(7); //-> 79
  let totalContext8 = context.charCodeAt(8); //-> 67

  // Creating a div to append all the data type information
  const charCodeAtDiv = document.createElement("div");

  // Appending data type results to the div
  charCodeAtDiv.innerHTML = `
                                  <br/>
                                  <h2>-CharCodeAt()</h2>
                                  <p>Context : ${context}</p><br>
                                  <p>Output charCodeAt(0) : ${totalContext1}</p>
                                  <p>Output charCodeAt(1) : ${totalContext2}</p>
                                  <p>Output charCodeAt(2) : ${totalContext3}</p>
                                  <p>Output charCodeAt(3) : ${totalContext4}</p>
                                  <p>Output charCodeAt(4) : ${totalContext5}</p><br>
                                  <p>Output charCodeAt(6) : ${totalContext6}</p>
                                  <p>Output charCodeAt(7) : ${totalContext7}</p>
                                  <p>Output charCodeAt(8) : ${totalContext8}</p>
                                  `;

  // Appending the div to the body
  document.body.appendChild(charCodeAtDiv);
}
// To see the output, call the function like this:
// exampleCharCodeAt();
