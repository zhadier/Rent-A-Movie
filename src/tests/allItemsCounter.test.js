import totalItems from '../modules/allItemsCounter.js';

beforeAll(() => {
  document.body.innerHTML = `
  <span class="movie-section__items"></span>
  <section id="movie-section"></section>`;
});

test('The counter function returns the total number of items in the homepage', () => {
  // ## Arrange
  const movies = document.querySelector('#movie-section');
  const display = document.querySelector('.movie-section__items');
  movies.innerHTML = `
  <div class="movie-wrapper" id="movie1"></div>
  <div class="movie-wrapper" id="movie2"></div>
  <div class="movie-wrapper" id="movie3"></div>`;
  // ## Add
  const items = totalItems(document.querySelectorAll('.movie-wrapper'), display);
  // ## Assert
  expect(items).toEqual(3);
});
