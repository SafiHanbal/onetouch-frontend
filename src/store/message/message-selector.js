export const selectIsLoading = (state) => state.message.isLoading;
export const selectMessages = (state) => state.message.messages;
export const selectError = (state) => state.message.error;

export const selectSendingMessage = (state) => state.message.sendingMessage;
export const selectSendMessageError = (state) => state.message.sendMessageError;
