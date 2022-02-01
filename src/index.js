import './scss/style.scss';
import getMovieData from './modules/consumeTVMazeAPI.js';
import displayMovies from './modules/displayMovies.js';
import totalItems from './modules/allItemsCounter.js';

const query = 'action';
const homeItems = document.querySelector('.movie-section__items');
getMovieData(0, query).then((movieList) => {
  displayMovies(movieList);
  const all = document.querySelectorAll('.movie-wrapper');
  totalItems(all, homeItems);
});
