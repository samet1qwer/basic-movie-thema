//TODO write your api key
const apiKey = "your-api-key";
const url = `http://www.omdbapi.com/?s=scooby&type=movie&apikey=${apiKey}`;

function httpRequest(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      düzenle(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
function düzenle(data) {
  const görselKutuları = document.querySelectorAll("img");
  const başlıklar = document.querySelectorAll("h3");

  Array.from(data.Search).forEach((element, index) => {
    const title = element.Title;
    başlıklar[index].innerHTML = title;
  });
  console.log(data.Search);

  data.Search.forEach((element, index) => {
    const link = element.Poster;

    const görselKutusu = görselKutuları[index];
    görselKutusu.src = link;
  });
}

httpRequest(url);
