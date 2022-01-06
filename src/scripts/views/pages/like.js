/* eslint-disable */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurants-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';

import template from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestoIdb });

    const restaurant = await FavoriteRestoIdb.getAllRestos();
    const restaurantContainer = document.querySelector('#restos');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += template.createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
