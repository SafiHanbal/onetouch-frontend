export const API_REQ_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const apiRequest = async (
  url,
  method = API_REQ_TYPES.GET,
  body,
  isFormData
) => {
  const options = {
    method,
  };

  if (isFormData) {
    options.headers = {
      'Content-Type': 'multipart/form-data',
    };
    options.body = body;
  } else {
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(body);
  }
  console.log(options);

  const req = await fetch(url, options);
  return await req.json();
};
