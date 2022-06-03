// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryCintainer = document.querySelector(".gallery");
const galleryElement = createGalleryElement(galleryItems);

function createGalleryElement(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class = "gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
        })
    .join("");
};

// console.log(galleryMarkup);

function onGAlleryContainerClick(event) {
    if (!event.target.classList.contains(`gallery__image`)) {
        renurn;
    } else {
        const instance = basicLightbox.create(`
    <img
    src="${event.target.dataset.source}"
    />
`)
instance.show()
    }
    console.log(event.target);
};

galleryCintainer.insertAdjacentHTML(`beforeend`, galleryElement);
galleryCintainer.addEventListener(`click`, onGAlleryContainerClick);