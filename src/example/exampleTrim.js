export function exampleTrim() {
  // trim() -> removes all spaces from the beginning and end of the string.

  // Variable initialization
  let variableText1 = "JavaScript ";
  let variableText2 = "Language";

  // Trim example
  let trimText = variableText1.trim() + variableText2;

  // Creating a div to append all the results
  const trimDiv = document.createElement("div");

  // Appending the results to the div
  trimDiv.innerHTML = `
      <br/>
      <h2>- Trim()</h2>
        <p>Text : ${variableText1 + variableText2}</p>
        <p>Trim Output : ${trimText}</p>
      `;

  // Appending the div to the body
  document.body.appendChild(trimDiv);
}

// To see the output, call the function like this:
// exampleTrim();
