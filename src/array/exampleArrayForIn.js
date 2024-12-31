export function exampleArrayForIn() {
  let colors = ["Black", "White", "Yellow", "Green", "Orange"];
  let text = "";

  for (let result in colors) {
    // result is the index in for-in
    if (result == 2 || result == 4) {
      text += `My favorite color ${colors[result]}<br/>`;
    } else {
      text += `Other color ${colors[result]}<br/>`;
    }
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and calling the function
  printDiv.innerHTML = `
                    <br/>
                    <h2>-Array For-In</h2>
                    <p>Array Colors → ${colors}</p>   
                    <p>For-In → <br/> ${text}</p>   
                    `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
