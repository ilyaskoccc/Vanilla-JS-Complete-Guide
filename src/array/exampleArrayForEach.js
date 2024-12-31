export function exampleArrayForEach() {
  // ForEach
  let text = "";
  const colors = ["Black", "White", "Red"];

  // `forEach` ile `text` değişkenine ekleme yapılıyor
  colors.forEach((x) => {
    text += `${x} forEach running.<br/>`;
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                      <br/>
                      <h2>-ForEach</h2>
                      <p>Array → ${colors} </p>
                      <p>ForEach → </br>${text} </p>    
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
