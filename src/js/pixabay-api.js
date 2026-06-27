import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const getImagesByQuery = async (searchedQuery, currentPage) => {
  const requestParams = new URLSearchParams({
    key: '56234849-957137b57f74daf80c06e675b',
    q: searchedQuery,
    page: currentPage,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await axios.get('/api/', { params: requestParams });

  return response.data;
};
