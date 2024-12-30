export function exampleForInObject() {
  /* The for...in loop is used to iterate over the enumerable properties of an object.
            
            for (let key in object) {
                // Code to execute for each key
            }
    */

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Example object
  const person = {
    name: "John",
    age: 30,
    occupation: "Developer",
  };

  // Appending data type results to the div
  printDiv.innerHTML = `<br/><h2>-For...In with Object</h2>`;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  // Using for...in to iterate over the object properties
  for (let key in person) {
    printDiv.innerHTML += `<p>${key}: ${person[key]}</p>`;
  }
}
