const baseURL = ' https://api.tvmaze.com';

const getMovie = async (movieId) => {
  const connect = await fetch(`${baseURL}/lookup/shows?tvrage=${movieId}`);
  const movie = await connect.json();
  return movie;
};

export { getMovie as default };