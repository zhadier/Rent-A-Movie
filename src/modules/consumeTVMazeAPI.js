const baseURL = ' https://api.tvmaze.com';

const getMovieData = async (index, query) => {
  const connect = await fetch(`${baseURL}/shows?q=${query}`);
  const response = await connect.json().then((dataList) => {
    const shortList = dataList.slice(index, index + 50);
    shortList.map((item) => {
      const container = {
        id: item.id,
        name: item.name,
        genres: item.genres,
        image: item.image,
        end: item.ended,
        rating: item.rating,
        summary: item.summary,
      };
      return container;
    });
    return shortList;
  });
  return response;
};

const getMovie = async (movieId) => {
  const connect = await fetch(`${baseURL}/lookup/shows?tvrage=${movieId}`);
  const movie = await connect.json();
  return movie;
};

export { getMovieData, getMovie };
