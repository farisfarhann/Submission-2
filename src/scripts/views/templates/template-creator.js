import CONFIG from '../../globals/config';
 
const createRestoDetailTemplate = (restaurants) => `
  <h2 class="resto__title">${restaurants.name}</h2>
  <img class="resto__poster vcenter" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="resto__info">
    <h3 class="content-label">Information</h3>
    <h4>Rating</h4>
    <p>${restaurants.rating}</p>
    <h4>Alamat</h4>
    <p>${restaurants.address}</p>
    <h4>Kota</h4>
    <p>${restaurants.city}</p>
  </div>
  <div class="resto__description">
  <h3 class="content-label">Deskripsi</h3>
    <p>${restaurants.description}</p>
  </div>
  <div class="resto__menu">
    <h3 class="content-label">Menu Makanan</h3>
      <div class="food-menu-container">
        <ul>
        </ul>
      </div>
    <h3 class="content-label">Menu Minuman</h3>
      <div class="drink-menu-container">
        <ul>
        </ul>
      </div>
  </div>
  <div class="resto__review">
    <h3 class="content-label">Ulasan</h3>
    <div class="review-container">
    </div>
  </div>
`;
 
const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${restaurant.menus}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

  const createRestoFoodMenuTemplate = (foods) => `
  <li>${foods.name}
  `;

  const createRestoDrinksMenuTemplate = (drinks) => `
  <li>${drinks.name}
  `;

  const createRestoReviewTemplate = (customerReviews) => `
  <p class="review-name">${customerReviews.name}
  <p>${customerReviews.review}
  <p>${customerReviews.date}
  `;


 
export { createRestoItemTemplate, createRestoDetailTemplate, createRestoFoodMenuTemplate, createRestoDrinksMenuTemplate, createRestoReviewTemplate};