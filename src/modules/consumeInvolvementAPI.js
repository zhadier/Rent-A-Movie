const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getComments = async (movieId, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/comments?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/comments`, {
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

const getReservations = async (movieId, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/reservations?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addReservation = async (movieId, username, dateStart, dateEnd, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
      username,
      date_start: dateStart,
      date_end: dateEnd,
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
  getComments,
  addComment,
  countComments,
  getReservations,
  addReservation,
  countReservations,
};
