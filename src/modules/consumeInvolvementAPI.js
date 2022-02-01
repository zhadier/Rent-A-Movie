const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const newApp = async (app) => {
  const connect = await fetch(`${iBaseURL}`, {
    method: 'POST',
    body: JSON.stringify({
      app_id: 'appTest',
    }),
    headers: { 'Content-type': 'application/json' },
  });
  const response = await connect.json();
  console.log(response);
  return response;
};

export { newApp };