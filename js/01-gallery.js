import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

listGallery.insertAdjacentHTML("afterbegin", markup);
listGallery.addEventListener("click", handleOpen);


function handleOpen(event) {
  event.preventDefault(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalSizeImage = event.target.dataset.source;
  
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${originalSizeImage}">`
  );
  instance.show();

  const isVisible = document.querySelector(".basicLightbox");

  if (isVisible) {
    addEventListener("keydown", closeModal);
    function closeModal(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
  }
}

