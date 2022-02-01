const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz/comments';

const getComments = async (movieId) => {
  const connect = await fetch(`${iBaseURL}?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment) => {
  const connect = await fetch(`${iBaseURL}`, {
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
  arr.forEach(() => {
    count += 1;
  });
  return count;
};

export { getComments, addComment, countComments };