/* eslint-disable */
import FavoriteMovieIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

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
    const restaurant = await FavoriteMovieIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restos');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
