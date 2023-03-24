import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesEl = document.querySelector('ul.gallery');

function createGalleryMarkup(items) {
    return items
        .map(
            ({ preview, original, description }) => `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </li>
        `,
        )
        .join('');
}

const addGalleryMarkyp = createGalleryMarkup(galleryItems);

imagesEl.innerHTML = addGalleryMarkyp;

imagesEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
    blockStandartAction(evt);

    const isGalleryItemEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryItemEl) {
        return;
    }

    console.log(evt.target);

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    document.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            instance.close();
        }
    });
}

function blockStandartAction(evt) {
    evt.preventDefault();
}
