const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let rentedDate = '';

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
  const reservationsList = await connect.json();
  if (reservationsList.error) return [];
  return reservationsList;
};

const isReserved = async (movieId, dateStart, dateEnd, appID) => {
  const cdS = new Date(dateStart);
  const cdE = new Date(dateEnd);
  const reservationsList = await getReservations(movieId, appID);
  for (let i = 0; i < reservationsList.length; i += 1) {
    const apiS = new Date(reservationsList[i].date_start);
    const apiE = new Date(reservationsList[i].date_end);
    rentedDate = `from ${apiS.toISOString().slice(0, 10)} to ${apiE.toISOString().slice(0, 10)}`;
    if (cdS >= apiS && cdS <= apiE) return true;
    if (cdE >= apiS && cdE <= apiE) return true;
    if (cdS <= apiS && cdE >= apiE) return true;
  }
  return false;
};

const addReservation = async (movieId, username, dateStart, dateEnd, appID) => {
  let response = '';
  const isResev = await isReserved(movieId, dateStart, dateEnd, appID);
  if (!isResev) {
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
    response = await connect.text();
  } else {
    response = `This movie is already rented ${rentedDate}.`;
  }
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
