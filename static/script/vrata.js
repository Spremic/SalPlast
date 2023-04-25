let slike = [
  {
    slika: "/static/image/folder/IMG_1928.jpeg",
  },
  {
    slika: "/static/image/folder/IMG_1938.jpeg",
  },
 ];

let container = document.querySelector("#image");

for (let i = 0; i < slike.length; i++) {
  container.innerHTML += `<div class="image"> <img src="${slike[i].slika}" alt ="slika" />  </div>`;
}
