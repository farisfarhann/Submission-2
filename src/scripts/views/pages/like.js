/* eslint-disable */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';

import template from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Restoran Favorit</h2>
            <hr>
            <div id="restos" class="restos">
       
            </div>
          </div>
       `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restos');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += template.createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
