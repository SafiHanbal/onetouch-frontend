import USERS_ACTION_TYPES from './users-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  users: [],
  error: null,
  groupChatUsersLoading: false,
  groupChatUsers: [],
  groupChatUsersError: null,
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
    case USERS_ACTION_TYPES.GROUP_CHAT_USERS_SEARCH_START:
      return {
        ...state,
        groupChatUsersLoading: true,
      };
    case USERS_ACTION_TYPES.GROUP_CHAT_USERS_SEARCH_SUCCESS:
      return {
        ...state,
        groupChatUsersLoading: false,
        groupChatUsers: payload,
      };
    case USERS_ACTION_TYPES.GROUP_CHAT_USERS_SEARCH_FAILED:
      return {
        ...state,
        groupChatUsersLoading: false,
        groupChatUsersError: payload,
      };
    case USERS_ACTION_TYPES.CLEAR_GROUP_CHAT_USER:
      return {
        ...state,
        groupChatUsers: [],
      };

    default:
      return state;
  }
};
