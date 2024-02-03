import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector(".gallery");

const createGallery = (el) => {
    return el.map(({ preview, original, description }) => {
       return `
       <li class="gallery__item">
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
};
// console.log(galleryItems);

const photosMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend",photosMarkup);

// ---------------------------------------------------------------------------


const handleGalleryClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !=="IMG"){
        return;
    }

    const urlOriginal = event.target.dataset.source;

//  create new basicLightBox instance

const instance= basicLightbox.create (`<img src="${urlOriginal}">`);
    instance.show(); 
    
const handleOnEscKeyPress = (event) => { 
    if (event.key === 'Escape')
    {
        instance.close();
        windows.removeEventListener("Keydown", handleOnEscKeyPress);
        }
};
    
window.addEventListener('keydown', handleOnEscKeyPress)
};

galleryList.addEventListener('click',handleGalleryClick);