const assert = require('assert');

Feature('Liking Restaurant');
Before(({I}) => {
  I.amOnPage('/#/like');
});
Scenario('showing empty liked restaurant', ({I}) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  const firstResto = locate('.restaurant__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');

  const likedRestoTitle = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({I}) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  const firstResto = locate('.restaurant__name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');

  const likedRestoTitle = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage('/#/like');
  I.click('.restaurant__name a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item__not__found');
  const onFav = await I.grabTextFrom('.resto-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restoran untuk ditampilkan');
});
