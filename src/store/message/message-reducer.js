import MESSAGE_ACTION_TYPES from './message-types';

const INITIAL_STATE = {
  isLoading: false,
  messages: [],
  error: null,
  sendingMessage: false,
  sendMessageError: null,
};

export const messageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_START:
      return {
        ...state,
        isLoading: true,
      };
    case MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        messages: payload,
      };
    case MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case MESSAGE_ACTION_TYPES.SET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case MESSAGE_ACTION_TYPES.SEND_MESSAGE_START:
      return {
        ...state,
        sendingMessage: true,
      };
    case MESSAGE_ACTION_TYPES.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        sendingMessage: false,
      };
    case MESSAGE_ACTION_TYPES.SEND_MESSAGE_FAILED:
      return {
        ...state,
        sendingMessage: false,
        sendMessageError: payload,
      };
    default:
      return state;
  }
};
