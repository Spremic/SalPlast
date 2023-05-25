let slike = [
  {
    slika: "/static/image/folder/10.JPG",
  },
  {
    slika: "/static/image/folder/11.JPG",
  },
  {
    slika: "/static/image/folder/19.JPG",
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
    slika: "/static/image/folder/44.JPG",
  },
];

let container = document.querySelector("#image");

for (let i = 0; i < slike.length; i++) {
  container.innerHTML += `<div class="image"> <img src="${slike[i].slika}" alt ="slika" />  </div>`;
}
