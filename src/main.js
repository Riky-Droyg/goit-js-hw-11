// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import './css/style.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './js/pixabay-api';
import './js/render-functions';
import {
  clearGallery,
  createGallery,
  getImagesByQuery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const input = event.target.elements['search-text'].value;
  clearGallery();
  showLoader();
  getImagesByQuery(input)
    .then(result => createGallery(result))

    .catch(error => {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
