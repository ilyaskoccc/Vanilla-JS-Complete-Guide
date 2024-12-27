export function exampleLenght() {
  // lenght -> değişken içerisindeki karakter sayısını geriye döner.
  let name1 = "Ilyas Koc";
  let totalChar = name1.length;

  // Creating a div to append all the data type information
  const resultDiv1 = document.createElement("div");

  // Appending data type results to the div
  resultDiv1.innerHTML = `
  <br/><br/>
  <h2>-Lenght</h2>
  <p>name1: ${name1}</p>
  <p>totalChar: ${totalChar}</p>
`;

  // Appending the div to the body
  document.body.appendChild(resultDiv1);
}

// To see the output, call the function like this:
// exampleLenght();
