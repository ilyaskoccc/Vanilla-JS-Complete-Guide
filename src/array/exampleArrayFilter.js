export function exampleArrayFilter() {
  // Filter
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const allDivisibleBy = num.filter((x) => x % 2 === 0);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                            <br/>
                            <h2>-Filter</h2>
                            <p>Array → ${num.join(", ")} </p>
                            <p>All Divisible By Two Filter → ${allDivisibleBy.join(
                              ", "
                            )} </p>    
                            `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
