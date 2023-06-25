import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`;
    })
    .join("");
}

const onClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600"/>
  `);

  instance.show();
};

galleryContainerEl.addEventListener("click", onClick);
