export function mixed() {
  // alert(); -> Basic Page Pop-up Box
  alert("This Is Pop-Up Box");

  // console.log(); -> Logs A Message To The Console
  console.log("Page Loaded!");

  // innerHTML -> Gets Or Sets The HTML Content Of An Element
  document.getElementById("paragraph").innerHTML = "<h2>-Mixed</h2>";

  // debugger; -> Used for debugging.
  debugger;

  // Creating a div to append all the data type information
  const paragraphTitle = document.createElement("div");

  // Appending data type results to the div
  paragraphTitle.innerHTML = `
  <p>First Paragraph Text</p>
`;

  // Appending the div to the body
  document.body.appendChild(paragraphTitle);
}
