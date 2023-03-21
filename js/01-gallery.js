import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesEl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            item => `
            <div class="gallery__item"
            <a class="gallery__link" href="${item.original}"
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
            </a>
            </div>
        `,
        )
        .join('');
}

const addGalleryMarkyp = createGalleryMarkup(galleryItems);
imagesEl.innerHTML = addGalleryMarkyp;
