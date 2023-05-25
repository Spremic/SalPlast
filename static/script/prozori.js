let slike = [
  {
    slika: "/static/image/folder/9.JPG",
  },
  {
    slika: "/static/image/folder/12.JPG",
  },
  {
    slika: "/static/image/folder/13.JPG",
  },
  {
    slika: "/static/image/folder/14.JPG",
  },
  {
    slika: "/static/image/folder/15.JPG",
  },
  {
    slika: "/static/image/folder/18.JPG",
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
    slika: "/static/image/folder/24.JPG",
  },
  {
    slika: "/static/image/folder/33.JPG",
  },
  {
    slika: "/static/image/folder/34.JPG",
  },
  {
    slika: "/static/image/folder/40.JPG",
  },
  {
    slika: "/static/image/folder/44.JPG",
  },
  {
    slika: "/static/image/folder/45.JPG",
  },
];

let container = document.querySelector("#image");

for (let i = 0; i < slike.length; i++) {
  container.innerHTML += `<div class="image"> <img src="${slike[i].slika}" alt ="slika" />  </div>`;
}
