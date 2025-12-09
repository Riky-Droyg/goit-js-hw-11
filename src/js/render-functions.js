import { fetchImages } from './pixabay-api';
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.photo-card div a', {});
const btn = document.querySelector('.btn[type=button]');



export function createGallery(array) {
  const markup = array.reduce(
    (
      acc,
      { likes, views, comments, downloads, previewURL, largeImageURL, tags }
    ) =>
      acc +
      `<li class="photo-card">
        <div>
          <a href="${largeImageURL}">
            <img src="${previewURL}" alt="${tags}">
          </a>
        </div>
        <ul>
          <li><p>Likes:<br>${likes}</p></li>
          <li><p>Views:<br>${views}</p></li>
          <li><p>Comments:<br>${comments}</p></li>
          <li><p>Downloads:<br>${downloads}</p></li>
        </ul>
      </li>`,
    ''
  );
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = ``;
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  btn.classList.add('is-hidden');
}
export function showLoadMoreButton() {
  btn.classList.remove('is-hidden');
}

export function smoothScrollGallery() {
  const firstCard = document.querySelector('.gallery .photo-card');
  if (!firstCard) return;

  const { height: cardHeight } = firstCard.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}
