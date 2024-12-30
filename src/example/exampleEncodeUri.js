export function exampleEncodeUri() {
  /* The encodeURI() function in JavaScript is used to encode a Uniform Resource Identifier (URI) 
by escaping certain characters so that it can be safely transmitted over the internet. 
It converts characters that have special meanings in a URI into their percent-encoded format.*/

  // Variable initialization
  let context1 = "https://example.com/search?query=hello world&lang=en#section";

  // valid example
  let totalContext1 = encodeURI(context1);

  // Creating a div to append all the data type information
  const encodeUriDiv = document.createElement("div");

  // Appending data type results to the div
  encodeUriDiv.innerHTML = `
                              <br/>
                              <h2>-EncodeURI()</h2>
                              <p>Context → ${context1}</p>
                              <p>Output encodeUri → ${totalContext1}</p>
                              `;

  // Appending the div to the body
  document.body.appendChild(encodeUriDiv);
}
// To see the output, call the function like this:
// exampleEncodeUri();
