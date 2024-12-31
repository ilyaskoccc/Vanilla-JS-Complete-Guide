export function exampleArrayShuffle() {
  // Original Array
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Creating a copy of the original array to avoid mutation
  const numCopy = [...num];

  // Adding the shuffle method to Array prototype
  Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
      // Random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements
      [this[i], this[j]] = [this[j], this[i]]; // ES6 destructuring assignment
    }
    return this; // Return shuffled array
  };

  // Calling the shuffle method on the copy of the array
  const shuffledArray = numCopy.shuffle(); // Shuffle the copied array

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Shuffle</h2>
                            <p>Original Array → ${num.join(", ")} </p>
                            <p>Shuffled Array → ${shuffledArray.join(
                              ", "
                            )} </p>    
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
