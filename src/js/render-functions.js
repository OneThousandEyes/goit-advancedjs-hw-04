import SimpleLightboxModule from 'simplelightbox/dist/simple-lightbox.modules.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const SimpleLightbox = SimpleLightboxModule.default ?? SimpleLightboxModule;

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  preloader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

const lightboxOptions = {
  captionsData: 'alt',
  captionDelay: 250,
};

let lightbox = null;

const createGallery = images => {
  const markup = images
    .map(
      imgData => `
    <li class="gallery-card">
      <a class="gallery-link" href="${imgData.largeImageURL}">
        <img class="gallery-img" src="${imgData.webformatURL}" alt="${imgData.tags}" />
      </a>
      <div class="gallery-stats">
        <div class="stat-item">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${imgData.likes}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Views</span>
          <span class="stat-value">${imgData.views}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${imgData.comments}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${imgData.downloads}</span>
        </div>
      </div>
    </li>
  `
    )
    .join('');

  refs.galleryList.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-link', lightboxOptions);
  } else {
    lightbox.refresh();
  }
};

const clearGallery = () => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }

  refs.galleryList.innerHTML = '';
};

const showLoader = () => {
  refs.preloader.classList.add('is-active');
};

const hideLoader = () => {
  refs.preloader.classList.remove('is-active');
};

const showLoadMoreButton = () => {
  refs.loadMoreBtn.classList.remove('is-hidden');
};

const hideLoadMoreButton = () => {
  refs.loadMoreBtn.classList.add('is-hidden');
};

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};
