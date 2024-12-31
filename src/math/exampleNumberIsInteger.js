export function exampleNumberIsInteger() {
  // Examples for Number.isInteger()
  const integerNumber = 42;
  const negativeInteger = -5;
  const floatingNumber = 3.14;
  const stringNumber = "10";
  const nanValue = NaN;
  const infiniteValue = Infinity;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Number.isInteger</h2>
                          <p>Is Integer (42)? → ${Number.isInteger(
                            integerNumber
                          )}</p>
                          <p>Is Integer (-5)? → ${Number.isInteger(
                            negativeInteger
                          )}</p>
                          <p>Is Integer (3.14)? → ${Number.isInteger(
                            floatingNumber
                          )}</p>
                          <p>Is Integer ("10")? → ${Number.isInteger(
                            stringNumber
                          )}</p>
                          <p>Is Integer (NaN)? → ${Number.isInteger(
                            nanValue
                          )}</p>
                          <p>Is Integer (Infinity)? → ${Number.isInteger(
                            infiniteValue
                          )}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
