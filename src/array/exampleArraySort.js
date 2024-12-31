export function exampleArraySort() {
  // Sort Number
  const numbers = [500, 200, 50, 256, 45];
  const sortNum = numbers.sort((a, b) => {
    return a - b;
  });

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div
  printDiv.innerHTML = `
                      <br/>
                      <h2>-Sort Number</h2> 
                      <p>Sort → ${sortNum} </p>  
                      `;

  // Appending the div to the body
  document.body.appendChild(printDiv);

  // Sort String
  function sortStr(a, b) {
    const alphabet =
      "AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz";

    if (a.lenght === 0 || b.lenght === 0) {
      return a.lenght - b.lenght;
    } else {
      let one = alphabet.indexOf(a[0]);
      let two = alphabet.indexOf(b[0]);

      if (one !== two) {
        return one - two;
      } else {
        return sortStr(a.slice(1), b.slice(1));
      }
    }
  }
  const names = [
    "Volkan",
    "Ümit",
    "Onur",
    "Serkan",
    "Hakan",
    "Çağatay",
    "Şinasi",
  ];
  const sortNames = names.sort(sortStr);

  // Creating a div to append all the data type information
  const printDiv1 = document.createElement("div");

  // Appending data type results to the div
  printDiv1.innerHTML = `
                        <br/>
                        <h2>-Sort String</h2> 
                        <p>Sort → ${sortNames} </p>  
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv1);
}
