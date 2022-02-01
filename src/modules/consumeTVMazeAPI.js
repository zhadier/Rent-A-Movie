const baseURL = ' https://api.tvmaze.com';
const query = 'action';

const getMovieData = async () => {
  const connect = await fetch(`${baseURL}/shows?q=${query}`);
  const movieList = await connect.json();
  return movieList;
};

export { getMovieData as default };
