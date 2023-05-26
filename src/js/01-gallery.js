
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line


const gallery = document.querySelector('ul.gallery');
function createNewGallery() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    }).join('');
  
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}
 
  
  createNewGallery();

  


  const modal = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData:'alt'

  });

console.log(galleryItems);
