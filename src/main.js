import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import * as render from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchFormEl } = event;
  const searchedQuery = searchFormEl.elements['search-text'].value.trim();

  render.clearGallery();
  render.showLoader();

  getImagesByQuery(searchedQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      render.createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      render.hideLoader();
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
