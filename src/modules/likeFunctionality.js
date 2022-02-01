const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'zggEBXzpFcQqjDxvMhMz';

const setLikes = async (id) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.json();
  return response;
};

const getLikes = async () => {
  const connect = await fetch(`${baseURL}${appID}/likes/`).then((r) => {
    console.log(r);
  });
  const response = await connect.json();
  console.log(response);
  return response;
};
// fetch(baseURL, {
//   method: 'POST',
//   headers: { 'Content-type': 'application/JSON' },
// }).then((response) => console.log(response.text()));
// // });
export { getLikes, setLikes };
