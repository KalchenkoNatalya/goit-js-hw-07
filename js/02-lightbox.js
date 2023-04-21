import { galleryItems } from "./gallery-items.js";
// Change code below this line


const listSecondGallery = document.querySelector(".gallery");

//створюємо розмітку
const markupSecondGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  )
  .join("");

// рендерим
listSecondGallery.insertAdjacentHTML("afterbegin", markupSecondGallery);


//вішаємо слухача подій
listSecondGallery.addEventListener("click", onClickOpen);

function onClickOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
   const options = {
      captionsData: "alt",
      captionDelay: 250,
    }
  new SimpleLightbox(".gallery__link", options);
}
