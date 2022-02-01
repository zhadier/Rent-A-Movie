import getMovieData from './consumeTVMazeAPI';

const getList = async () => {
  const movieList = await getMovieData().then((dataList) => {
    let finalList = [];
    const shortList = dataList.slice(0, 50);
    shortList.forEach((item) => {
      const {
        id, name, genres, image, ended, rating, summary,
      } = item;
      finalList = [
        ...finalList,
        {
          id,
          name,
          genres,
          image,
          ended,
          rating,
          summary,
        },
      ];
    });
    return finalList;
  });
  return movieList;
};

const displayMovies = async () => {
  const movieSection = document.querySelector('#movie-section');
  movieSection.innerHTML = '';
  const movieList = await getList();
  movieList.forEach((item) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'movie-wrapper';
    const details = document.createElement('div');
    details.className = 'movie-wrapper__title';
    const img = document.createElement('img');
    img.className = 'movie-wrapper__img';
    img.src = item.image.medium;
    const name = document.createElement('h3');
    name.innerHTML = `${item.name}`;
    const like = document.createElement('i');
    like.className = 'far fa-heart';
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button';
    details.append(name, like);
    mainDiv.append(img, details, commentButton);
    movieSection.appendChild(mainDiv);
  });
};

export { displayMovies, getList };
