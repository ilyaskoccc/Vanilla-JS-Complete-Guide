export function exampleArrayAvarage() {
  // Avarage
  const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // Adding the average method to Array prototype
  Array.prototype.avarage = function () {
    let islem = 0;
    for (let i = 0; i < this.length; i++) {
      islem += this[i];
    }
    let result = islem / this.length;
    return result;
  };

  // Calling the avarage method on the array
  const avarage = num.avarage(); // Correct way to call the method

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Avarage</h2>
                          <p>Array → ${num.join(", ")} </p>
                          <p>Avarage → ${avarage} </p>    
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
