import USERS_ACTION_TYPES from './users-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  users: [],
  error: null,
};

export const usersReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_TYPES.SEARCH_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case USERS_ACTION_TYPES.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case USERS_ACTION_TYPES.SEARCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
