const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
    it('should return the restaurant that has been added', async () => {
      favoriteRestaurants.putResto({ id: 1 });
      favoriteRestaurants.putResto({ id: 2 });
  
      expect(await favoriteRestaurants.getResto(1)).toEqual({ id: 1 });
      expect(await favoriteRestaurants.getResto(2)).toEqual({ id: 2 });
      expect(await favoriteRestaurants.getResto(3)).toEqual(undefined);
    });
  
    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
      favoriteRestaurants.putResto({ aProperty: 'property' });
  
      expect(await favoriteRestaurants.getAllRestos())
        .toEqual([]);
    });
  
    it('can return all of the Restaurants that have been added', async () => {
      favoriteRestaurants.putResto({ id: 1 });
      favoriteRestaurants.putResto({ id: 2 });
  
      expect(await favoriteRestaurants.getAllRestos()).toEqual([{ id: 1 }, { id: 2 }]);
    });
  
    it('should remove favorite Restaurant', async () => {
      favoriteRestaurants.putResto({ id: 1 });
      favoriteRestaurants.putResto({ id: 2 });
      favoriteRestaurants.putResto({ id: 3 });
  
      await favoriteRestaurants.deleteResto(1);
  
      expect(await favoriteRestaurants.getAllRestos()).toEqual([{ id: 2 }, { id: 3 }]);
    });
  
    it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
      favoriteRestaurants.putResto({ id: 1 });
      favoriteRestaurants.putResto({ id: 2 });
      favoriteRestaurants.putResto({ id: 3 });
  
      await favoriteRestaurants.deleteResto(4);
  
      expect(await favoriteRestaurants.getAllRestos()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
  
    it('should be able to search for restaurant', async () => {
      favoriteRestaurants.putResto({ id: 1, name: 'restaurant a' });
      favoriteRestaurants.putResto({ id: 2, name: 'restaurant b' });
      favoriteRestaurants.putResto({ id: 3, name: 'restaurant abc' });
      favoriteRestaurants.putResto({ id: 4, name: 'ini mah restaurant abcd' });
  
      expect(await favoriteRestaurants.searchRestos('restaurant a')).toEqual([
        { id: 1, name: 'restaurant a' },
        { id: 3, name: 'restaurant abc' },
        { id: 4, name: 'ini mah restaurant abcd' },
      ]);
    });
};
  
export { itActsAsFavoriteRestaurantModel };