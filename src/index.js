import './scss/style.scss';
import { getMovieData } from './modules/consumeTVMazeAPI.js';
import displayMovies from './modules/displayMovies.js';
import displayMovieDetails from './modules/displayMovieDetails.js';

const query = 'action';

getMovieData(0, query).then((movieList) => {
  displayMovies(movieList);
});

window.addEventListener('load', displayMovieDetails(40995));
