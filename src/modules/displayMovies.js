<<<<<<< HEAD
import { getLikes, setLikes } from './likeFunctionality';
=======
import displayMovieDetails from './displayMovieDetails.js';

>>>>>>> dev
const displayMovies = async (movieList) => {
  const movieSection = document.querySelector('#movie-section');
  movieSection.innerHTML = '';
  movieList.forEach((item) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'movie-wrapper';
    mainDiv.id = `movie${item.id}`;
    const details = document.createElement('div');
    details.className = 'movie-wrapper__title';
    const img = document.createElement('img');
    img.className = 'movie-wrapper__img';
    img.src = item.image.medium;
    const name = document.createElement('h3');
    name.innerHTML = `${item.name}`;
    const likes = document.createElement('div');
    likes.className = 'movie-wrapper__likes';
    const span = document.createElement('span');
    const like = document.createElement('i');
    like.className = 'far fa-heart';
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button';
    likes.append(like, span);
    details.append(name, likes);
    commentButton.addEventListener('click', () => {
      displayMovieDetails(item);
    });
    mainDiv.append(img, details, commentButton);
    movieSection.appendChild(mainDiv);
    like.addEventListener('click', () => {
      setLikes(`movie${item.id}`);
      getLikes().then((response) => {
        response = response.filter((ele) => ele.item_id === `movie${item.id}`);
        span.innerHTML = `${response[0].likes}`;
      });
    });
  });
};

export { displayMovies as default };
