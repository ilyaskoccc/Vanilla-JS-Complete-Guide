export function exampleEncodeUriComponent() {
  /* The encodeURIComponent() function in JavaScript is used to encode a single component of a 
  URI by escaping special characters that have special meanings in the URI structure. It ensures that the 
  component can be safely included in a URI, especially when it is a query string, path segment, or part of the URL. 
  It percent-encodes characters that might interfere with the URI structure, such as spaces, &, =, and other special characters. */

  // Variable initialization
  let context1 = "name=John Doe & age=30";

  // valid example
  let totalContext1 = encodeURIComponent(context1);

  // Creating a div to append all the data type information
  const encodeUriComponentDiv = document.createElement("div");

  // Appending data type results to the div
  encodeUriComponentDiv.innerHTML = `
                                  <br/>
                                  <h2>-EncodeURIComponent()</h2>
                                  <p>Context → ${context1}</p>
                                  <p>Output encodeURIComponent → ${totalContext1}</p>
                                  `;

  // Appending the div to the body
  document.body.appendChild(encodeUriComponentDiv);
}
// To see the output, call the function like this:
// exampleEncodeUriComponent();
