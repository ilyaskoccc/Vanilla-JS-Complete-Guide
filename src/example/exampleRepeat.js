export function exampleRepeat() {
  /* The repeat() method repeats the content of a variable based on the value provided as a parameter, 
    creates new content, and returns the created content.*/

  // Variable initialization
  let context = "Ilyas Koc ";

  // valid example
  let totalContext = context.repeat(2); // "Ilyas Koc Ilyas Koc"

  // Creating a div to append all the data type information
  const repeatDiv = document.createElement("div");

  // Appending data type results to the div
  repeatDiv.innerHTML = `
            <br/>
            <h2>-Repeat()</h2>
              <p>Context : ${context} <br/></p>
              <p>Output Repeat : ${totalContext}</p>
            `;

  // Appending the div to the body
  document.body.appendChild(repeatDiv);
}
// To see the output, call the function like this:
// exampleRepeat();
