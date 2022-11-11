import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@mui/material';
import UserBadge from '../user-badge/user-badge.component';

import {
  ModalContainer,
  UserBadgeContainer,
  Name,
  UpdateNameForm,
  CustomizedTextFields,
  CustomizedButton,
  UsersList,
} from './update-group-modal.styles';

import UserCard from '../user-card/user-card.component';

import { selectUser } from '../../store/user/user-selector';
import { selectGroupChatUsers } from '../../store/users/users-selector';
import {
  clearGroupChatUsers,
  groupChatUserSearchAsync,
} from '../../store/users/users-action';
import {
  changeGroupNameAsync,
  addUserToGroupAsync,
  removeUserFromGroupAsync,
} from '../../store/chat/chat-action';

const UpdateGroupModal = ({ openGroupModal, handleCloseGroupModal, chat }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const users = useSelector(selectGroupChatUsers);

  const [timer, setTimer] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [userName, setUserName] = useState('');

  const handleUserNameOnChange = (event) => {
    setUserName(event.target.value);
    clearTimeout(timer);
    if (!event.target.value) return dispatch(clearGroupChatUsers());
    setTimer(
      setTimeout(() => {
        dispatch(groupChatUserSearchAsync(event.target.value));
      }, 1500)
    );
  };

  const handleGroupNameOnSubmit = (event) => {
    event.preventDefault();
    dispatch(changeGroupNameAsync({ chatId: chat._id, chatName: groupName }));
    setGroupName('');
  };

  const handleGroupNameOnChange = (event) => {
    setGroupName(event.target.value);
  };

  const addUser = (user) => {
    dispatch(addUserToGroupAsync({ chatId: chat._id, userId: user._id }));
  };
  const removeUser = (user) => {
    dispatch(removeUserFromGroupAsync({ chatId: chat._id, userId: user._id }));
  };

  const { groupAdmin, chatName } = chat;

  return (
    <div>
      <Modal
        open={openGroupModal}
        onClose={handleCloseGroupModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Name variant="h5">{chatName}</Name>
          <UserBadgeContainer>
            {chat.users
              .filter((groupUser) => groupUser._id !== user._id)
              .map((groupUser) => (
                <UserBadge
                  key={groupUser._id}
                  removeUser={removeUser}
                  user={groupUser}
                  isAdmin={groupAdmin._id === user._id}
                />
              ))}
          </UserBadgeContainer>
          <UpdateNameForm onSubmit={handleGroupNameOnSubmit}>
            <CustomizedTextFields
              type="text"
              label="New Group Name"
              variant="outlined"
              value={groupName}
              onChange={handleGroupNameOnChange}
              required={true}
            />
            <CustomizedButton type="submit" variant="contained">
              Change
            </CustomizedButton>
          </UpdateNameForm>

          {groupAdmin._id === user._id && (
            <CustomizedTextFields
              type={Text}
              label="Add User"
              variant="outlined"
              value={userName}
              onChange={handleUserNameOnChange}
            />
          )}

          <UsersList display={users.length}>
            {users?.slice(0, 4).map((user) => (
              <UserCard
                key={user._id}
                addUser={true}
                user={user}
                groupChatHandler={addUser}
              />
            ))}
          </UsersList>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default UpdateGroupModal;
