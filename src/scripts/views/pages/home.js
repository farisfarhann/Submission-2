import RestaurantSource from '../../data/restaurant-source';
import template from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Jelajahi Restoran</h2>
        <hr>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.home();
    const restaurantContainer = document.querySelector('#restos');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += template.createRestoItemTemplate(restaurants);
    });
  },
};

export default Home;
