import CHAT_ACTION_TYPES from './chat-types';

const CHAT_INITIAL_STATE = {
  myChats: [],
  selectedChat: null,
  isLoading: true,
  error: null,
};

export const chatReducer = (state = CHAT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHAT_ACTION_TYPES.GET_MY_CHATS_START:
      return {
        ...state,
        isLoading: true,
      };
    case CHAT_ACTION_TYPES.GET_MY_CHATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        myChats: payload,
      };
    case CHAT_ACTION_TYPES.GET_MY_CHATS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CHAT_ACTION_TYPES.SET_SELECTED_CHAT:
      return {
        ...state,
        selectedChat: payload,
      };
    case CHAT_ACTION_TYPES.ACCESS_CHAT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CHAT_ACTION_TYPES.ACCESS_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CHAT_ACTION_TYPES.ACCESS_CHAT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
