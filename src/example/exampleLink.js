export function exampleLink() {
  /* In JavaScript, the link() method is a deprecated method that creates an 
      HTML <a> (link) element with a specified name attribute, making it possible to link to that link within a web page. 
      This method is rarely used in modern web development as better alternatives are available. */

  // Variable initialization
  const context = "Click here";

  // valid example
  const linkString = context.link("#"); // → Attention this method is deprecated.

  // Creating a div to append all the data type information
  const linkDiv = document.createElement("div");

  // Appending data type results to the div
  linkDiv.innerHTML = `
                                <br/>
                                <h2>-Link() → Attention this method is deprecated.</h2>
                                <p>Text → ${context}</p>
                                <p>Output Link() → ${linkString}</p>
                                `;

  // Appending the div to the body
  document.body.appendChild(linkDiv);
}
// To see the output, call the function like this:
// exampleLink();
