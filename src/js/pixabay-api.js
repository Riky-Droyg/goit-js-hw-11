import axios from "axios";

export function fetchImages(query, page) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '53591790-b582ea9c542996630b69812e5',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 6,
        
      },
    })
    .then(response => response.data.hits);
}
