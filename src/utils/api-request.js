import { store } from '../store/store';

export const API_REQ_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const apiRequest = async (
  endpoint,
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

  const { user } = store.getState().user;
  if (user?.token) {
    options.headers.Authorization = `Bearer ${user.token}`;
  }

  const host = 'http://127.0.0.1:8000/';
  const url = `${host}${endpoint}`;

  const req = await fetch(url, options);
  return await req.json();
};
