let slike = [
  {
    slika: "/static/image/folder/1.JPG",
  },
  {
    slika: "/static/image/folder/21.JPG",
  },
  {
    slika: "/static/image/folder/22.JPG",
  },
  {
    slika: "/static/image/folder/23.JPG",
  },
  {
    slika: "/static/image/folder/24.JPG",
  },
  {
    slika: "/static/image/folder/26.JPG",
  },
  {
    slika: "/static/image/folder/35.JPG",
  },
  {
    slika: "/static/image/folder/36.JPG",
  },
  {
    slika: "/static/image/folder/37.JPG",
  },
  {
    slika: "/static/image/folder/38.JPG",
  },
  {
    slika: "/static/image/folder/39.JPG",
  },
];

let container = document.querySelector("#image");

for (let i = 0; i < slike.length; i++) {
  container.innerHTML += `<div class="image"> <img src="${slike[i].slika}" alt ="slika" />  </div>`;
}
