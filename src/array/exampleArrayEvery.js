export function exampleArrayEvery() {
  // Every
  const num = [5, 10, 65, 30, 88, 35, 20];

  // Check if every number is divisible by 5 and store the results with numbers
  const results = num.map(
    (x) => `${x} → ${x % 5 === 0 ? "Divisible" : "Not Divisible"}`
  );

  // Check if all numbers are divisible by 5
  const allDivisibleByFive = num.every((x) => x % 5 === 0); // Return boolean

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and calling the function
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Every</h2>
                          <p>Array → ${num.join(", ")} </p>
                          <p>Results → ${results.join(", ")} </p>
                          <p>Every → All Divisible By Five: ${allDivisibleByFive} </p>    
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
