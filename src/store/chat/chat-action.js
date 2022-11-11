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

export const setSelectedChat = (payload) =>
  createAction(CHAT_ACTION_TYPES.SET_SELECTED_CHAT, payload);

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
    dispatch(accessChatSuccess());
    dispatch(setSelectedChat(chat));
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

export const changeGroupName = (payload) =>
  createAction(CHAT_ACTION_TYPES.CHANGE_GROUP_NAME, payload);

export const changeGroupNameAsync = (body) => async (dispatch) => {
  try {
    const data = await apiRequest(
      'api/v1/chat/rename',
      API_REQ_TYPES.PATCH,
      body
    );
    if (data.status !== 'success') throw new Error(data.message);
    const { groupChat } = data.data;
    dispatch(setSelectedChat(groupChat));
    dispatch(getMyChatsAsync());
  } catch (err) {
    console.error(err.message);
  }
};

export const addUserToGroup = (payload) =>
  createAction(CHAT_ACTION_TYPES.ADD_USER_TO_GROUP, payload);

export const addUserToGroupAsync = (body) => async (dispatch) => {
  try {
    const data = await apiRequest(
      'api/v1/chat/add-to-group',
      API_REQ_TYPES.PATCH,
      body
    );

    if (data.status !== 'success') throw new Error(data.message);
    const { groupChat } = data.data;
    dispatch(setSelectedChat(groupChat));
    dispatch(getMyChatsAsync());
  } catch (err) {
    console.error(err.message);
  }
};

export const removeUserFromGroup = (payload) =>
  createAction(CHAT_ACTION_TYPES.REMOVE_USER_FROM_GROUP, payload);

export const removeUserFromGroupAsync = (body) => async (dispatch) => {
  try {
    const data = await apiRequest(
      'api/v1/chat/remove-from-group',
      API_REQ_TYPES.PATCH,
      body
    );

    if (data.status !== 'success') throw new Error(data.message);
    const { groupChat } = data.data;
    dispatch(setSelectedChat(groupChat));
    dispatch(getMyChatsAsync());
  } catch (err) {
    console.error(err.message);
  }
};
