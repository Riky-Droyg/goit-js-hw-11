import axios from 'axios';

export async function fetchImages(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '53591790-b582ea9c542996630b69812e5',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  console.log(response.data);
  return response.data.hits;
}
