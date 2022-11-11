import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@mui/material';

import {
  groupChatUserSearchAsync,
  clearGroupChatUsers,
} from '../../store/users/users-action';
import { createGroupChatAsync } from '../../store/chat/chat-action';
import { selectGroupChatUsers } from '../../store/users/users-selector';

import {
  CustomizedButton,
  CustomizedTextFields,
  Heading,
  ModalContainer,
  UserBadgeContainer,
  UsersList,
} from './group-chat-modal.styles';

import UserCard from '../user-card/user-card.component';
import UserBadge from '../user-badge/user-badge.component';

const GroupChatModal = ({ isModalOpen, handleModalClose }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectGroupChatUsers);

  const [groupName, setGroupName] = useState('');
  const [userName, setUserName] = useState('');
  const [timer, setTimer] = useState(null);
  const [groupChatUser, setGroupChatUser] = useState([]);

  const resetState = () => {
    handleModalClose();
    setGroupChatUser([]);
    setUserName('');
    setUserName('');
    dispatch(clearGroupChatUsers());
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!groupName || !groupChatUser.length) return;
    const users = groupChatUser.map((user) => user._id);
    dispatch(createGroupChatAsync({ chatName: groupName, users }));
    resetState();
  };

  const handleGroupNameOnChange = (event) => {
    setGroupName(event.target.value);
  };

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

  const addUser = (user) => {
    const userExits = groupChatUser.find(
      (chatUser) => chatUser._id === user._id
    );
    if (userExits) return;
    setGroupChatUser([...groupChatUser, user]);
  };

  const removeUser = (user) => {
    setGroupChatUser(
      groupChatUser.filter((chatUser) => chatUser._id !== user._id)
    );
  };

  return (
    <div>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <ModalContainer>
          <Heading variant="h5">Create Group Chat</Heading>
          <form onSubmit={handleOnSubmit}>
            <CustomizedTextFields
              type="text"
              variant="outlined"
              label="Group Name"
              value={groupName}
              onChange={handleGroupNameOnChange}
              required={true}
            />
            <CustomizedTextFields
              type="text"
              variant="outlined"
              label="Add User"
              value={userName}
              onChange={handleUserNameOnChange}
            />
            <UserBadgeContainer>
              {groupChatUser.map((user) => (
                <UserBadge key={user._id} user={user} removeUser={removeUser} />
              ))}
            </UserBadgeContainer>
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
            <CustomizedButton type="submit" variant="contained">
              Create Chat
            </CustomizedButton>
          </form>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default GroupChatModal;
