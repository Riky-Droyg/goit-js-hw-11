import axios from 'axios';
import iziToast from 'izitoast';
import { lightbox } from './render-functions';

const listSearchImage = document.querySelector('.listSearchImage');
const loader = document.querySelector('.loader');

export function getImagesByQuery(query) {
  loader.classList.remove('is-hidden');
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '53591790-b582ea9c542996630b69812e5',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      const { hits } = response.data;
      if (!hits.length) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      addSearchImage(response.data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}

function addSearchImage(arroy) {
  const searhEl = arroy.reduce(
    (
      acc,
      { likes, views, comments, downloads, previewURL, largeImageURL, tags }
    ) => {
      return (
        acc +
        `<li class="photo-card">

      <div>
      <a href="${largeImageURL}">
<img src="${previewURL}" data-large-image="${largeImageURL}" alt="${tags}">
</a>
      </div>


        <ul>
      <li>
        <p>Likes: <br/> ${likes}</p>
      </li>
      <li>
        <p>Views: <br/> ${views}</p>
      </li>
      <li>
        <p>Comments: <br/> ${comments}</p>
      </li>
      <li>
        <p>Downloads: <br/> ${downloads}</p>
      </li>
    </ul> 
    </li>`
      );
    },
    ''
  );

  listSearchImage.innerHTML = searhEl;
  lightbox.refresh();
}
