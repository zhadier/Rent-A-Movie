import './scss/style.scss';

import { displayMovieDetails, createApp } from './modules/displayMovieDetails.js';

window.addEventListener('load', displayMovieDetails(40995));
// window.addEventListener('load', createApp('appTest'));
