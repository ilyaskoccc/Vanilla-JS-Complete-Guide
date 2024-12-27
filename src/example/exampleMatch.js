export function exampleMatch() {
  /* The match() method in JavaScript is used to retrieve the matches of a string against a regular expression pattern. 
    It returns an array of matches or null if no match is found. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.match("Ilyas");
  let totalContext2 = context.match("John");

  // Creating a div to append all the data type information
  const matchDiv = document.createElement("div");

  // Appending data type results to the div
  matchDiv.innerHTML = `
                        <br/>
                        <h2>-Match()</h2>
                        <p>Context : ${context}</p>
                        <p>Output text match to "Ilyas" : ${totalContext1}</p>
                        <p>Output text match to "John" : ${totalContext2}</p>
                        `;

  // Appending the div to the body
  document.body.appendChild(matchDiv);
}
// To see the output, call the function like this:
// exampleMatch();
