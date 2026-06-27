import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import * as render from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

let page = 1;
let searchedQuery;
let totalPages;

const onLoadMoreButtonClick = async event => {
  page++;
  render.showLoader();

  try {
    const data = await getImagesByQuery(searchedQuery, page);
    render.createGallery(data.hits);

    const card = document.querySelector('.gallery-card');
    const { height } = card.getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });

    if (page >= totalPages) {
      render.hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      position: 'topRight',
    });
  } finally {
    render.hideLoader();
    }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { target: searchFormEl } = event;
    searchedQuery = searchFormEl.elements['search-text'].value.trim();

    page = 1;

    render.clearGallery();
    render.hideLoadMoreButton();
    render.showLoader();

    const data = await getImagesByQuery(searchedQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / 15);

    render.createGallery(data.hits);

    if (totalPages > 1) {
      render.showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      position: 'topRight',
    });
  } finally {
    render.hideLoader();
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreButtonClick);
