export function exampleIsArray() {
  let context = "JavaScript";
  let context1 = ["JavaScript", "HTML", "CSS"];
  let context2 = [];
  let context3 = new Array();

  let result = Array.isArray(context);
  let result1 = Array.isArray(context1);
  let result2 = Array.isArray(context2);
  let result3 = Array.isArray(context3);

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                        <br/>
                        <h2>-Is Array</h2>
                        <p>context → ${context} : Variable Type → <b>${typeof context}</b></p>   
                        <p>Is Array → <b>${result}</b> </p>   
                        <p>context1 → ${context1} : Variable Type → <b>${typeof context1}</b></p>   
                        <p>Is Array1 → <b>${result1}</b> </p>
                        <p>context2 → ${context2} : Variable Type → <b>${typeof context2}</b></p>   
                        <p>Is Array2 → <b>${result2}</b> </p>
                        <p>context3 → ${context3} : Variable Type → <b>${typeof context3}</b></p>   
                        <p>Is Array3 → <b>${result3}</b> </p>
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
