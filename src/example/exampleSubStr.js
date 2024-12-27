export function exampleSubStr() {
  /* The substr() method copies the values within a specific range of a defined variable based on the provided parameters, 
  creates new content, and returns the created value.*/

  // Variable initialization
  let context = "Ilyas Koc JavaScript";

  // valid example
  let totalContext = context.substr(5); // "Ilyas" deleted, but this method deprecated.

  // Creating a div to append all the data type information
  const substrDiv = document.createElement("div");

  // Appending data type results to the div
  substrDiv.innerHTML = `
        <br/>
        <h2>-Substr() → Attention this method is deprecated.</h2>
          <p>Context : ${context}</p>
          <p>Output Substr : ${totalContext}</p>
        `;

  // Appending the div to the body
  document.body.appendChild(substrDiv);
}
// To see the output, call the function like this:
// exampleSubStr();
