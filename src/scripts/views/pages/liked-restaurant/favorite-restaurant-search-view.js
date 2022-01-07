import template from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
       <div class="content">
       <h2 class="content__heading" >Favorite Restaurants</h2>
       <input id="query" class="caribox" type="text" placeholder="Cari Restoran">
           <div id="resto" class="restaurants favorite resto"></div>
       </div>
       `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(template.createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found restaurants__not__found">Tidak ada restoran untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
