export function exampleParseFloat() {
  // Examples of parseFloat()
  const examples = [
    { input: "123.45" },
    { input: "123.45abc" },
    { input: "abc123.45" },
    { input: "7.89e2" }, // Scientific notation
    { input: "0.12345" },
    { input: ".56789" },
    { input: "100px" },
    { input: "Infinity" },
  ];

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Generating result strings
  const results = examples.map(({ input }) => {
    const result = parseFloat(input);
    return `<p>parseFloat("${input}") → ${result}</p>`;
  });

  // Appending results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-parseFloat</h2>
                          ${results.join("")}
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
