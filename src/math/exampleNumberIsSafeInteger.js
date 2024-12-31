export function exampleNumberIsSafeInteger() {
  // Examples for Number.isSafeInteger()
  const safeInteger = 9007199254740991; // Maximum safe integer
  const unsafeInteger = 9007199254740992; // Beyond maximum safe integer
  const negativeSafeInteger = -9007199254740991; // Minimum safe integer
  const floatingNumber = 3.14; // Not an integer
  const stringNumber = "100"; // String, not an integer
  const nanValue = NaN; // Not a number
  const infiniteValue = Infinity; // Not a finite number

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Number.isSafeInteger</h2>
                          <p>Is Safe Integer (9007199254740991)? → ${Number.isSafeInteger(
                            safeInteger
                          )}</p>
                          <p>Is Safe Integer (9007199254740992)? → ${Number.isSafeInteger(
                            unsafeInteger
                          )}</p>
                          <p>Is Safe Integer (-9007199254740991)? → ${Number.isSafeInteger(
                            negativeSafeInteger
                          )}</p>
                          <p>Is Safe Integer (3.14)? → ${Number.isSafeInteger(
                            floatingNumber
                          )}</p>
                          <p>Is Safe Integer ("100")? → ${Number.isSafeInteger(
                            stringNumber
                          )}</p>
                          <p>Is Safe Integer (NaN)? → ${Number.isSafeInteger(
                            nanValue
                          )}</p>
                          <p>Is Safe Integer (Infinity)? → ${Number.isSafeInteger(
                            infiniteValue
                          )}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
