import './css/style.css';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  smoothScrollGallery,
} from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('.form');
const btn = document.querySelector('.btn[type=button]');
const input = document.querySelector('input[name="search-text"]');

let page = 1;
let inputValue = '';
const PER_PAGE = 15;

async function actionFormSubmit(event) {
  event.preventDefault();

  inputValue = input.value.trim();
  hideLoadMoreButton();

  if (!inputValue) {
    iziToast.info({
      title: 'Info',
      message: 'Поле вводу порожнє',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    page = 1;
    const data = await fetchImages(inputValue, page);

    if (!data.length) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    createGallery(data);

    if (data.length >= PER_PAGE) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        error.message ||
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } finally {
    page = 2;
    hideLoader();
  }
}

async function actionBtnClick(event) {
  event.preventDefault();

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await fetchImages(inputValue, page);

    if (!data.length) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(data);
    smoothScrollGallery();
    page += 1;

    if (data.length < PER_PAGE) {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message:
        error.message ||
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', actionFormSubmit);
btn.addEventListener('click', actionBtnClick);
