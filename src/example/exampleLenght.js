export function exampleLenght() {
  // length -> returns the number of characters in the variable.
  let name1 = "Ilyas Koc";
  let totalChar = name1.length;

  // Creating a div to append all the data type information
  const resultDiv1 = document.createElement("div");

  // Appending data type results to the div
  resultDiv1.innerHTML = `
  <br/>
  <h2>-Lenght</h2>
  <p>name1: ${name1}</p>
  <p>totalChar: ${totalChar}</p>
`;

  // Appending the div to the body
  document.body.appendChild(resultDiv1);
}

// To see the output, call the function like this:
// exampleLenght();
