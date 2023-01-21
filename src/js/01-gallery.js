// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// -- variables -- //
const { log } = console;
const gallery = document.querySelector('.gallery');
let lightbox;

//add Events to gallery items
gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    //open there a image carrousel
    lightbox = new SimpleLightbox('.gallery .gallery__item', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.open();
  }
});

//displaying gallery
[...galleryItems].forEach(photo => {
  //var for creating gallery item like link
  let galleryItem = document.createElement('a');
  //adding classes to elements
  galleryItem.classList.add('gallery__item');
  galleryItem.setAttribute('href', `${photo.original}`);
  //adding with insertAdjacentHTML <img> element
  galleryItem.insertAdjacentHTML(
    'afterbegin',
    `<img class="gallery__image" src="${photo.preview}" data-source="${photo.original}" alt="${photo.description}">`
  );

  //adding to gallery div
  gallery.appendChild(galleryItem);
});
