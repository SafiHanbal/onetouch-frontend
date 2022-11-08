import USER_ACTION_TYPES from './user-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  user: {},
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOGIN:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
