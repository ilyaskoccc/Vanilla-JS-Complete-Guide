export function exampleLocaleCompare() {
  /* The localeCompare() method in JavaScript is used to compare two strings in the current locale, 
    considering the language-specific rules for sorting and ordering. It returns a number indicating 
    whether the reference string comes before, after, or is the same as the compared string. */

  // Variable initialization
  let context1 = "Ilyas";
  let context2 = "John";
  let context3 = "Ilyas";
  let context4 = "Alyas";

  // valid example
  let totalContext1 = context1.localeCompare(context2);
  let totalContext2 = context1.localeCompare(context3);
  let totalContext3 = context1.localeCompare(context4);

  // Creating a div to append all the data type information
  const localeCompareDiv = document.createElement("div");

  // Appending data type results to the div
  localeCompareDiv.innerHTML = `
                              <br/>
                              <h2>-LocaleCompare()</h2>
                              <p>Context1 : ${context1}</p>
                              <p>Context2 : ${context2}</p>
                              <p>Output text localeCompare : ${totalContext1}</p><br/>
                              <p>Context1 : ${context1}</p>
                              <p>Context2 : ${context3}</p>
                              <p>Output text localeCompare : ${totalContext2}</p><br/>
                              <p>Context1 : ${context1}</p>
                              <p>Context2 : ${context4}</p>
                              <p>Output text localeCompare : ${totalContext3}</p>
                              `;

  // Appending the div to the body
  document.body.appendChild(localeCompareDiv);
}
// To see the output, call the function like this:
// exampleLocaleCompare();
