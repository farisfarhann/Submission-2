import CONFIG from '../../globals/config';
 
const createRestoDetailTemplate = (restaurants) => `
  <h2 class="resto__title">${restaurants.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurants.rating}</p>
    <h4>Release Date</h4>
    <p>${restaurants.city}</p>
  </div>
  <div class="resto__description">
    <h3>Overview</h3>
    <p>${restaurants.description}</p>
  </div>
`;
 
const createRestoItemTemplate = (restaurants) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
        <img class="restaurants-item__header__poster" alt="${restaurants.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;
 
export { createRestoItemTemplate, createRestoDetailTemplate };