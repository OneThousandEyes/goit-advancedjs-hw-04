import axios from 'axios';

export const getImagesByQuery = searchedQuery => {
  const requestParams = new URLSearchParams({
    key: '56234849-957137b57f74daf80c06e675b',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get('https://pixabay.com/api/', { params: requestParams }).then(response => response.data);
};

