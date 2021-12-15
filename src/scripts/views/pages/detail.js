import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoFoodMenuTemplate, createRestoDrinksMenuTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

 
const Detail = {
  async render() {
    return `
      <div id="restos" class="restos-detail"></div>
      <div id="likeButtonContainer"></div>  
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restos');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    const foodMenuContainer = document.querySelector('.food-menu-container');
    const restaurantFoodMenu = restaurant.menus.foods;
    restaurantFoodMenu.forEach((foods) => {
      foodMenuContainer.innerHTML += createRestoFoodMenuTemplate(foods);
    });

    const drinkMenuContainer = document.querySelector('.drink-menu-container');
    const restaurantDrinkMenu = restaurant.menus.drinks;
    restaurantDrinkMenu.forEach((drinks) => {
      drinkMenuContainer.innerHTML += createRestoDrinksMenuTemplate(drinks);
    });

    const reviewContainer = document.querySelector('.review-container');
    const restaurantReviews = restaurant.customerReviews;
    restaurantReviews.forEach((customerReviews) => {
      reviewContainer.innerHTML += createRestoReviewTemplate(customerReviews);  
    });

    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({  
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating
        },
    });
  },
};
 
export default Detail;