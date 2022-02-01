import './scss/style.scss';
import displayMovies from './modules/displayMovies';
import getMovieData from './modules/consumeTVMazeAPI';

const query = 'action';

getMovieData(0, query).then((movieList) => {
  displayMovies(movieList);
});
