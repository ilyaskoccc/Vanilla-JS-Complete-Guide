export function exampleSearch() {
  /* The search() method in JavaScript is used to search for a specified regular expression (regex) pattern within a string. 
    It returns the index of the first match. If no match is found, it returns -1. */

  // Variable initialization
  let context = "Ilyas Koc";

  // valid example
  let totalContext = context.search("a");

  // Creating a div to append all the data type information
  const searchDiv = document.createElement("div");

  // Appending data type results to the div
  searchDiv.innerHTML = `
                      <br/>
                      <h2>-Search()</h2>
                        <p>Context : ${context}</p>
                        <p>Output find to index "a" : ${totalContext}</p>
                      `;

  // Appending the div to the body
  document.body.appendChild(searchDiv);
}
// To see the output, call the function like this:
// exampleSearch();
