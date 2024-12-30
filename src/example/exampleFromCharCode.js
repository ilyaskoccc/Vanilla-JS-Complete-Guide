export function exampleFromCharCode() {
  /* The fromCharCode() method in JavaScript is a static method of the String object used to convert Unicode values into corresponding characters. 
    It returns a string created by using the specified sequence of Unicode values.*/

  // Variable initialization
  let context1 = "73";
  let context2 = "76";
  let context3 = "89";
  let context4 = "65";
  let context5 = "83";
  let context6 = "75";
  let context7 = "79";
  let context8 = "67";

  // valid example
  let totalContext1 = String.fromCharCode(context1); //-> I
  let totalContext2 = String.fromCharCode(context2); //-> L
  let totalContext3 = String.fromCharCode(context3); //-> Y
  let totalContext4 = String.fromCharCode(context4); //-> A
  let totalContext5 = String.fromCharCode(context5); //-> S
  let totalContext6 = String.fromCharCode(context6); //-> K
  let totalContext7 = String.fromCharCode(context7); //-> O
  let totalContext8 = String.fromCharCode(context8); //-> C

  // Creating a div to append all the data type information
  const fromCharCodeDiv = document.createElement("div");

  // Appending data type results to the div
  fromCharCodeDiv.innerHTML = `
                                    <br/>
                                    <h2>-FromCharCode()</h2>
                                    <p>Output fromCharCode(${context1}) : ${totalContext1}</p>
                                    <p>Output fromCharCode(${context2}) : ${totalContext2}</p>
                                    <p>Output fromCharCode(${context3}) : ${totalContext3}</p>
                                    <p>Output fromCharCode(${context4}) : ${totalContext4}</p>
                                    <p>Output fromCharCode(${context5}) : ${totalContext5}</p><br>
                                    <p>Output fromCharCode(${context6}) : ${totalContext6}</p>
                                    <p>Output fromCharCode(${context7}) : ${totalContext7}</p>
                                    <p>Output fromCharCode(${context8}) : ${totalContext8}</p>
                                    `;

  // Appending the div to the body
  document.body.appendChild(fromCharCodeDiv);
}
// To see the output, call the function like this:
// exampleFromCharCode();
