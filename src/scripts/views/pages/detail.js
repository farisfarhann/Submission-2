import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

 
const Detail = {
  async render() {
    return `
      <div id="restos" class="restos"></div>
      <div id="likeButtonContainer"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    // console.log(restaurant);
    const restaurantContainer = document.querySelector('#restos');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    // LikeButtonInitiator.init({
    //     likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //     movie: {
    //       id: movie.id,
    //       title: movie.title,
    //       overview: movie.overview,
    //       backdrop_path: movie.backdrop_path,
    //       vote_average: movie.vote_average,
    //     },
    // });
  },
};
 
export default Detail;