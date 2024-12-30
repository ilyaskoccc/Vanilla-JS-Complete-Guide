export function exampleDecodeUri() {
  /* In JavaScript, the decodeURI() function is used to decode a Uniform Resource Identifier (URI) 
    that has been encoded using encodeURI(). It reverses the percent-encoding applied to the URI, 
    converting percent-encoded characters back to their original form.*/

  // Variable initialization
  let context1 =
    "https://example.com/search?query=hello%20world&lang=en#section";

  // valid example
  let totalContext1 = decodeURI(context1);

  // Creating a div to append all the data type information
  const decodeUriDiv = document.createElement("div");

  // Appending data type results to the div
  decodeUriDiv.innerHTML = `
                                <br/>
                                <h2>-DecodeURI()</h2>
                                <p>Context → ${context1}</p>
                                <p>Output decodeURI → ${totalContext1}</p>
                                `;

  // Appending the div to the body
  document.body.appendChild(decodeUriDiv);
}
// To see the output, call the function like this:
// exampleDecodeUri();
