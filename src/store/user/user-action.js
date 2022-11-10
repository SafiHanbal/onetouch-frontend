import USER_ACTION_TYPES from './user-types';
import { createAction } from '../../utils/create-action';
import { apiRequest, API_REQ_TYPES } from '../../utils/api-request';

export const loginStart = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_START, payload);

export const loginSucess = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_SUCCESS, payload);

export const loginFailed = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_FAILED, payload);

export const loginUserAsync = (body) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const data = await apiRequest(
      'api/v1/user/login',
      API_REQ_TYPES.POST,
      body
    );

    if (data.status !== 'success') throw new Error(data.message);

    const { user } = data.data;
    dispatch(loginSucess(user));
  } catch (err) {
    dispatch(loginFailed(err));
  }
};

export const logoutStart = (payload) =>
  createAction(USER_ACTION_TYPES.LOGOUT_START, payload);

export const logoutSuccess = (payload) =>
  createAction(USER_ACTION_TYPES.LOGOUT_SUCCESS, payload);

export const logoutFailed = (payload) =>
  createAction(USER_ACTION_TYPES.LOGOUT_FAILED, payload);

export const logoutUserAsync = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    const data = await apiRequest('api/v1/user/logout');

    if (data.status !== 'success') throw new Error(data.message);
    dispatch(loginSucess(null));
  } catch (err) {
    dispatch(logoutFailed(err));
  }
};
