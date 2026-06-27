import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-DZUOq8aW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);t.defaults.baseURL=`https://pixabay.com`;var a=async(e,n)=>{let r=new URLSearchParams({key:`56234849-957137b57f74daf80c06e675b`,q:e,page:n,per_page:15,image_type:`photo`,orientation:`horizontal`,safesearch:`true`});return(await t.get(`/api/`,{params:r})).data},o=e(r(),1),s=o.default.default??o.default,c={galleryList:document.querySelector(`.js-gallery`),preloader:document.querySelector(`.js-loader`),loadMoreBtn:document.querySelector(`.js-load-more-btn`)},l={captionsData:`alt`,captionDelay:250},u=null,d=e=>{let t=e.map(e=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="gallery-stats">
        <div class="stat-item">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${e.likes}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Views</span>
          <span class="stat-value">${e.views}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${e.comments}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${e.downloads}</span>
        </div>
      </div>
    </li>
  `).join(``);c.galleryList.insertAdjacentHTML(`beforeend`,t),u?u.refresh():u=new s(`.gallery-link`,l)},f=()=>{u&&=(u.destroy(),null),c.galleryList.innerHTML=``},p=()=>{c.preloader.classList.add(`is-active`)},m=()=>{c.preloader.classList.remove(`is-active`)},h=()=>{c.loadMoreBtn.classList.remove(`is-hidden`)},g=()=>{c.loadMoreBtn.classList.add(`is-hidden`)},_={searchForm:document.querySelector(`.form`),loadMoreBtn:document.querySelector(`.js-load-more-btn`)},v=1,y,b;_.searchForm.addEventListener(`submit`,async e=>{try{e.preventDefault();let{target:t}=e;y=t.elements[`search-text`].value.trim(),v=1,f(),g(),p();let n=await a(y,v);if(n.hits.length===0){i.default.error({title:`Error`,message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}b=Math.ceil(n.totalHits/15),d(n.hits),b>1&&h()}catch{i.default.error({title:`Error`,message:`Something went wrong. Please try again.`,position:`topRight`})}finally{m()}}),_.loadMoreBtn.addEventListener(`click`,async e=>{v++,p();try{d((await a(y,v)).hits);let{height:e}=document.querySelector(`.gallery-card`).getBoundingClientRect();window.scrollBy({top:e*2,behavior:`smooth`}),v>=b&&(g(),i.default.info({message:`We're sorry, but you've reached the end of search results.`,position:`topRight`}))}catch{i.default.error({title:`Error`,message:`Something went wrong. Please try again.`,position:`topRight`})}finally{m()}});
//# sourceMappingURL=index.js.map