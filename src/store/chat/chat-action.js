import { createAction } from '../../utils/create-action';
import { apiRequest, API_REQ_TYPES } from '../../utils/api-request';
import CHAT_ACTION_TYPES from './chat-types';

export const getMyChatsStart = (payload) =>
  createAction(CHAT_ACTION_TYPES.GET_MY_CHATS_START, payload);

export const getMyChatsSuccess = (payload) =>
  createAction(CHAT_ACTION_TYPES.GET_MY_CHATS_SUCCESS, payload);

export const getMyChatsFailed = (payload) =>
  createAction(CHAT_ACTION_TYPES.GET_MY_CHATS_FAILED, payload);

export const getMyChatsAsync = () => async (dispatch) => {
  dispatch(getMyChatsStart());
  try {
    const data = await apiRequest('api/v1/chat');
    if (data.status !== 'success') throw new Error(data.message);
    const { chats } = data.data;
    dispatch(getMyChatsSuccess(chats));
  } catch (err) {
    dispatch(getMyChatsFailed());
  }
};

export const setSelectedUser = (payload) =>
  createAction(CHAT_ACTION_TYPES.SET_SELECTED_USER, payload);

export const accessChatStart = (payload) =>
  createAction(CHAT_ACTION_TYPES.ACCESS_CHAT_START, payload);

export const accessChatSuccess = (payload) =>
  createAction(CHAT_ACTION_TYPES.ACCESS_CHAT_SUCCESS, payload);

export const accessChatFailed = (payload) =>
  createAction(CHAT_ACTION_TYPES.ACCESS_CHAT_FAILED, payload);

export const accessChatAsync = (userId) => async (dispatch) => {
  dispatch(accessChatStart());
  try {
    const data = await apiRequest('api/v1/chat', API_REQ_TYPES.POST, {
      userId,
    });
    if (data.status !== 'success') throw new Error(data.message);
    const { chat } = data.data;
    dispatch(accessChatSuccess(chat));
    dispatch(setSelectedUser(chat.users.filter((user) => user._id === userId)));
    dispatch(getMyChatsAsync());
  } catch (err) {
    dispatch(accessChatFailed(err));
  }
};

export const createGroupChatStart = (payload) =>
  createAction(CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_START, payload);

export const createGroupChatSuccess = (payload) =>
  createAction(CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_SUCCESS, payload);

export const createGroupChatFailed = (payload) =>
  createAction(CHAT_ACTION_TYPES.CREATE_GROUP_CHAT_FAILED, payload);

export const createGroupChatAsync = (body) => async (dispatch) => {
  dispatch(createGroupChatStart());
  try {
    const data = await apiRequest(
      'api/v1/chat/group',
      API_REQ_TYPES.POST,
      body
    );
    if (data.status !== 'success') throw new Error(data.message);
    dispatch(getMyChatsAsync());
  } catch (err) {
    dispatch(createGroupChatFailed(err));
  }
};
