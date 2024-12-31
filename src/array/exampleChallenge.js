export function exampleChallenge() {
  // My Challenge
  const tanimlar = [
    "Volkan",
    "Hakan",
    [
      "Aslı",
      "Banu",
      "Hatice",
      ["Siyah", "Beyaz", "Sarı", "Lacivert", "Kırmızı", "Yeşil"],
      "Derya",
      "Ayşe",
    ],
    "Mesut",
    "Onur",
    "Ümit",
    "Serkan",
    "Levent",
    "Faik",
    "Hasan",
  ];
  const tanimlarStr =
    '["Volkan", "Hakan", ["Aslı", "Banu", "Hatice", ["Siyah", "Beyaz", "Sarı", "Lacivert", "Kırmızı", "Yeşil"], "Derya", "Ayşe"], "Mesut", "Onur", "Ümit", "Serkan", "Levent", "Faik", "Hasan"]';

  let text = "";
  let sonuc;
  for (sonuc in tanimlar) {
    if (Array.isArray(tanimlar[sonuc])) {
      let ilkKontrol;
      for (ilkKontrol in tanimlar[sonuc]) {
        if (Array.isArray(tanimlar[sonuc][ilkKontrol])) {
          let sonKontrol;
          for (sonKontrol in tanimlar[sonuc][ilkKontrol]) {
            text += `${tanimlar[sonuc][ilkKontrol][sonKontrol]}<br/>`;
          }
        } else {
          text += `${tanimlar[sonuc][ilkKontrol]}<br/>`;
        }
      }
    } else {
      text += `${tanimlar[sonuc]}<br/>`;
    }
  }

  // Creating a div to append all the data type information
  const printDiv = document.createElement("div");

  // Appending data type results to the div and Calling the function
  printDiv.innerHTML = `
                        <br/>
                        <h2>-My Challenge</h2>
                        <p>Array → ${tanimlarStr} </p>   
                        <p>${text} </p>
                        `;

  // Appending the div to the body
  document.body.appendChild(printDiv);
}
