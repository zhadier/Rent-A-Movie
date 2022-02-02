const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz/';

const getComments = async (movieId) => {
  const connect = await fetch(`${iBaseURL}comments?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment) => {
  const connect = await fetch(`${iBaseURL}comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await connect.text();
  return response;
};

const countComments = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return `Comments (${count})`;
};

const getReservations = async (movieId) => {
  const connect = await fetch(`${iBaseURL}reservations?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addReservation = async (movieId, username, date_start, date_end) => {
  const connect = await fetch(`${iBaseURL}reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
      username,
      date_start,
      date_end,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await connect.text();
  return response;
};

const countReservations = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return `Reservations (${count})`;
};

export {
  getComments, addComment, countComments, getReservations, addReservation, countReservations,
};