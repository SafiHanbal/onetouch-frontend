import CHAT_ACTION_TYPES from './chat-types';

const CHAT_INITIAL_STATE = {};

export const chatReducer = (state = CHAT_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
