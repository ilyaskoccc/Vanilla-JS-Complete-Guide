export function exampleParseInt() {
  // Examples of parseInt()
  const examples = [
    { input: "123", radix: undefined },
    { input: "123abc", radix: undefined },
    { input: "abc123", radix: undefined },
    { input: "1111", radix: 2 }, // Binary to Decimal
    { input: "1a", radix: 16 }, // Hexadecimal to Decimal
    { input: "7.89", radix: undefined },
    { input: "100px", radix: 10 },
    { input: "010", radix: undefined },
  ];

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Generating result strings
  const results = examples.map(({ input, radix }) => {
    const result = radix
      ? `parseInt("${input}", ${radix}) → ${parseInt(input, radix)}`
      : `parseInt("${input}") → ${parseInt(input)}`;
    return `<p>${result}</p>`;
  });

  // Appending results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-parseInt Examples</h2>
                          ${results.join("")}
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
