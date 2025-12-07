import { getImagesByQuery } from './pixabay-api';
import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('form.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const value = input.value.trim();
  getImagesByQuery(value);
});

export const lightbox = new SimpleLightbox('.listSearchImage a', {
  /* options */
});
