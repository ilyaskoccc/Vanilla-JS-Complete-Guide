export function exampleArraySome() {
  // Some
  let text = "";
  const num = [16, 23, 65, 32, 88, 33, 19];

  num.some((x) => {
    text += `${x % 3 === 0} → ${x}<br/>`;
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Some</h2>
                        <p>Array → ${num} </p>
                        <p>Some → Divisible By Three </br>${text} </p>    
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
