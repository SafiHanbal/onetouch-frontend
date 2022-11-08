import createAction from '../../utils/create-action';
import USER_ACTION_TYPES from './user-types';

export const login = (payload) =>
  createAction(USER_ACTION_TYPES.LOGIN_START, payload);
