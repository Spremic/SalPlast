let slike = [
  {
    slika: "/static/image/folder/2.JPG",
  },
  {
    slika: "/static/image/folder/3.JPG",
  },
  {
    slika: "/static/image/folder/4.JPG",
  },
  {
    slika: "/static/image/folder/5.JPG",
  },
  {
    slika: "/static/image/folder/6.JPG",
  },
  {
    slika: "/static/image/folder/7.JPG",
  },
  {
    slika: "/static/image/folder/8.JPG",
  },
  {
    slika: "/static/image/folder/17.JPG",
  },
  {
    slika: "/static/image/folder/20.JPG",
  },
  {
    slika: "/static/image/folder/25.JPG",
  },
  {
    slika: "/static/image/folder/30.JPG",
  },
  {
    slika: "/static/image/folder/35.JPG",
  },
  {
    slika: "/static/image/folder/41.JPG",
  },
  {
    slika: "/static/image/folder/47.JPG",
  },
];

let container = document.querySelector("#image");

for (let i = 0; i < slike.length; i++) {
  container.innerHTML += `<div class="image"> <img src="${slike[i].slika}" alt ="slika" />  </div>`;
}
