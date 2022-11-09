import USER_ACTION_TYPES from './user-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  user: null,
  error: null,
  usersLoading: false,
  users: null,
  usersError: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        error: null,
      };
    case USER_ACTION_TYPES.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case USER_ACTION_TYPES.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case USER_ACTION_TYPES.LOGOUT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
