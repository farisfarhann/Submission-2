import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurants Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (restaurants) => {
      await FavoriteRestoIdb.deleteResto(restaurants.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});