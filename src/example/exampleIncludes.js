export function exampleIncludes() {
  /* The includes() method in JavaScript is used to check if a string or an array contains a specified value. 
    It returns true if the value is found, and false if it is not. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext1 = context.includes("Ilyas"); // True - Because There Is Ilyas In The Text
  let totalContext2 = context.includes("John"); // False - Because There Not Is John In The Text

  // Creating a div to append all the data type information
  const includesDiv = document.createElement("div");

  // Appending data type results to the div
  includesDiv.innerHTML = `
                        <br/>
                        <h2>-Includes()</h2>
                          <p>Context : ${context}</p>
                          <p>Output find to "Ilyas" : ${totalContext1}</p>
                          <p>Output find to "John" : ${totalContext2}</p>
                        `;

  // Appending the div to the body
  document.body.appendChild(includesDiv);
}
// To see the output, call the function like this:
// exampleIncludes();
