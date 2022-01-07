/* eslint-disable */
import FavoriteRestoIdb from '../data/favorite-resto-idb';
import template from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  renderLike() {
    this._likeButtonContainer.innerHTML = template.createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this._likeButtonContainer.innerHTML = template.createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this.renderButton();
    });
  },

};

export default LikeButtonPresenter;
