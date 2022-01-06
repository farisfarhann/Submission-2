import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurants Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurants) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurants.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});