export function exampleNumberIsFinite() {
  // Examples for Number.isFinite()
  const validNumber = 42;
  const infiniteNumber = Infinity;
  const negativeInfinite = -Infinity;
  const stringNumber = "42";
  const nanValue = NaN;
  const undefinedValue = undefined;

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                          <br/>
                          <h2>-Number.isFinite</h2>
                          <p>Is Finite (Valid Number: 42)? → ${Number.isFinite(
                            validNumber
                          )}</p>
                          <p>Is Finite (Infinite: Infinity)? → ${Number.isFinite(
                            infiniteNumber
                          )}</p>
                          <p>Is Finite (Negative Infinite: -Infinity)? → ${Number.isFinite(
                            negativeInfinite
                          )}</p>
                          <p>Is Finite (String as Number: "42")? → ${Number.isFinite(
                            stringNumber
                          )}</p>
                          <p>Is Finite (NaN)? → ${Number.isFinite(nanValue)}</p>
                          <p>Is Finite (Undefined)? → ${Number.isFinite(
                            undefinedValue
                          )}</p>
                          `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
