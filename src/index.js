import './scss/style.scss';
import getMovieData from './modules/consumeTVMazeAPI.js';
import displayMovies from './modules/displayMovies.js';
import totalItems from './modules/allItemsCounter.js';

const dvdID = 'zggEBXzpFcQqjDxvMhMz';
const bluID = 'DiufW768skxheMu2XO3y';
const movieLink = document.querySelector('#movie__link');
const bluLink = document.querySelector('#blu-ray__link');
const aboutLink = document.querySelector('#about__link');
const movieSection = document.querySelector('#movie-section');
const aboutSection = document.querySelector('#about-section');
const bluSection = document.querySelector('#bluRay-section');
const dvd = 'action';
const bluray = 'girls';

const homeItems = document.querySelector('.movie-section__items');
getMovieData(0, dvd, 50).then((movieList) => {
  displayMovies(movieList, dvdID, 'movie');
  const all = document.querySelectorAll('#movie-section > .movie-wrapper');
  totalItems(all, homeItems);
});

const bluItems = document.querySelector('.bluRay-section__items');
getMovieData(51, bluray, 25).then((movieList) => {
  displayMovies(movieList, bluID, 'bluRay');
  const all = document.querySelectorAll('#bluRay-section > .movie-wrapper');
  totalItems(all, bluItems);
});

movieLink.addEventListener('click', () => {
  movieLink.classList.add('active');
  bluLink.classList.remove('active');
  aboutLink.classList.remove('active');
  movieSection.classList.remove('toggle');
  aboutSection.classList.add('toggle');
  bluSection.classList.add('toggle');
});

aboutLink.addEventListener('click', () => {
  movieLink.classList.remove('active');
  bluLink.classList.remove('active');
  aboutLink.classList.add('active');
  movieSection.classList.add('toggle');
  aboutSection.classList.remove('toggle');
  bluSection.classList.add('toggle');
});

bluLink.addEventListener('click', () => {
  movieLink.classList.remove('active');
  bluLink.classList.add('active');
  aboutLink.classList.remove('active');
  movieSection.classList.add('toggle');
  aboutSection.classList.add('toggle');
  bluSection.classList.remove('toggle');
});
