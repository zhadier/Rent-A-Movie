import './scss/style.scss';
import getMovieData from './modules/consumeTVMazeAPI.js';
import displayMovies from './modules/displayMovies.js';

const query = 'action';

getMovieData(0, query).then((movieList) => {
  displayMovies(movieList);
});
