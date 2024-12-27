export function exampleConcat() {
  /* The concat() method adds the variable or variables provided as parameters to the variable being operated on, 
  creates new content, and returns the created value. */

  // Variable initialization
  let context1 = "Ilyas Koc JavaScript ";
  let context2 = "Is a programming language";

  // valid example
  let totalContext = context1.concat(context2);

  // Creating a div to append all the data type information
  const concatDiv = document.createElement("div");

  // Appending data type results to the div
  concatDiv.innerHTML = `
          <br/>
          <h2>-Concat()</h2>
            <p>Context1 : ${context1} <br/></p>
            <p>Context2 : ${context2} <br/><br/></p>
            <p>Output Concat : ${totalContext}</p>
          `;

  // Appending the div to the body
  document.body.appendChild(concatDiv);
}
// To see the output, call the function like this:
// exampleConcat();
