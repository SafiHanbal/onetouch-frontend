export const selectUsers = (state) => state.users.users;
export const selectUsersError = (state) => state.users.error;
export const selectUsersLoading = (state) => state.users.isLoading;

export const selectGroupChatUsers = (state) => state.users.groupChatUsers;
export const selectGroupChatUsersError = (state) =>
  state.users.groupChatUsersError;
export const selectGroupChatUsersLoading = (state) =>
  state.users.groupChatUsersLoading;
