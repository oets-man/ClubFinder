class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed!");
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;

    this.innerHTML = `
      <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  disconnectedCallback() {
    console.log("disconnected!");
  }

  adoptedCallback() {
    console.log("adopted!");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute: ${name} changed!`);
  }

  // digunakan untuk mengamati perubahan nilai attribute caption
  /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */

  // return ['caption', 'title', 'src', ...]
  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
let imageFigureElement = document.querySelector("image-figure");
// imageFigureElement.remove();
// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
  //   imageFigureElement.remove();
  imageFigureElement = document.createElement("image-figure");

  imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
  imageFigureElement.setAttribute("alt", "Dicoding Logo");
  imageFigureElement.setAttribute("caption", "Huruf 'g' dalam logo Dicoding");
  document.body.appendChild(imageFigureElement);
}

// mengubah/manambahkan nilai attribute caption.
// setTimeout(() => {
//   imageFigureElement.setAttribute("caption", "Gambar 1");
// }, 1000);

// menghapus imageFigureElement dari DOM
// setTimeout(() => {
//   imageFigureElement.remove();
// }, 3000);
