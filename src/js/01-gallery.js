import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'alt',
  captionDelay: 250,
});

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  lightbox.open(event.target);
});
