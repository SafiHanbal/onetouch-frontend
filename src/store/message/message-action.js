import MESSAGE_ACTION_TYPES from './message-types';
import { createAction } from '../../utils/create-action';
import { apiRequest, API_REQ_TYPES } from '../../utils/api-request';

export const getAllMessagesStart = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_START, payload);
export const getAllMessagesSuccess = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_SUCCESS, payload);
export const getAllMessagesFailed = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.GET_ALL_MESSAGES_FAILED, payload);

export const getAllMessagesAsync = (chatId) => async (dispatch) => {
  dispatch(getAllMessagesStart());
  try {
    const data = await apiRequest(`api/v1/message/${chatId}`);

    if (data.status !== 'success') throw new Error(data.message);

    const { messages } = data.data;
    dispatch(getAllMessagesSuccess(messages));
  } catch (err) {
    dispatch(getAllMessagesFailed(err));
  }
};

export const sendMessageStart = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.SEND_MESSAGE_START, payload);
export const sendMessageSuccess = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.SEND_MESSAGE_SUCCESS, payload);
export const sendMessageFailed = (payload) =>
  createAction(MESSAGE_ACTION_TYPES.SEND_MESSAGE_FAILED, payload);

export const sendMessageAsync =
  (body, sendMessageSocket) => async (dispatch) => {
    dispatch(sendMessageStart());
    try {
      const data = await apiRequest('api/v1/message', API_REQ_TYPES.POST, body);
      if (data.status !== 'success') throw new Error(data.message);

      const { message } = data.data;
      dispatch(sendMessageSuccess());
      sendMessageSocket(message);
      dispatch(getAllMessagesAsync(message.chat._id));
    } catch (err) {
      dispatch(sendMessageFailed(err));
    }
  };
