export function exampleNumberIsNaN() {
  // Examples for Number.isNaN()
  const validNumber = 42;
  const invalidNumber = NaN;
  const stringNumber = "42";
  const undefinedValue = undefined;
  const stringValue = "hello";

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Number.isNaN</h2>
                          <p>Is NaN (Valid Number: 42)? → ${Number.isNaN(
                            validNumber
                          )}</p>
                          <p>Is NaN (Invalid Number: NaN)? → ${Number.isNaN(
                            invalidNumber
                          )}</p>
                          <p>Is NaN (String as Number: "42")? → ${Number.isNaN(
                            Number(stringNumber)
                          )}</p>
                          <p>Is NaN (Undefined)? → ${Number.isNaN(
                            undefinedValue
                          )}</p>
                          <p>Is NaN (String: "hello")? → ${Number.isNaN(
                            stringValue
                          )}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
