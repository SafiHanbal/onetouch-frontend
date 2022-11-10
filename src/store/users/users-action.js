import USERS_ACTION_TYPES from './users-types';
import { createAction } from '../../utils/create-action';
import { apiRequest } from '../../utils/api-request';

export const searchUsersStart = (payload) =>
  createAction(USERS_ACTION_TYPES.SEARCH_USERS_START, payload);

export const searchUsersSuccess = (payload) =>
  createAction(USERS_ACTION_TYPES.SEARCH_USERS_SUCCESS, payload);

export const searchUsersFailed = (payload) =>
  createAction(USERS_ACTION_TYPES.SEARCH_USERS_FAILED, payload);

export const searchUsersAsync = (searchStr) => async (dispatch) => {
  dispatch(searchUsersStart());
  try {
    const data = await apiRequest(
      `api/v1/user${searchStr ? `?search=${searchStr}` : ''}`
    );

    if (data.status !== 'success') throw new Error(data.message);
    const { users } = data.data;
    dispatch(searchUsersSuccess(users));
  } catch (err) {
    dispatch(searchUsersFailed(err));
  }
};
