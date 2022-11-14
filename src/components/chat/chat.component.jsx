import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography, useMediaQuery } from '@mui/material';
import { Visibility, ArrowBack } from '@mui/icons-material';

import { CustomizedButton, Header } from './chat.styles';

import UserModal from '../user-modal/user-modal.component';
import UpdateGroupModal from '../update-group-modal/update-group-modal.component';

import { clearGroupChatUsers } from '../../store/users/users-action';
import { selectUser } from '../../store/user/user-selector';
import MessageBox from '../message-box/message-box.component';
import { setSelectedChat } from '../../store/chat/chat-action';

const Chat = ({ chat }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const tabView = useMediaQuery('(max-width: 900px)');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [openGroupModal, setOpenGroupModal] = useState(false);
  const handleOpenGroupModal = () => setOpenGroupModal(true);
  const handleCloseGroupModal = () => {
    setOpenGroupModal(false);
    dispatch(clearGroupChatUsers());
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    dispatch(setSelectedChat(null));
  };

  return (
    <>
      <Header>
        {tabView && (
          <Button variant="contained" onClick={handleOnClick}>
            <ArrowBack />
          </Button>
        )}
        <Typography variant="h5">
          {chat.isGroupChat
            ? chat.chatName
            : chat.users.filter((chatUser) => chatUser._id !== user._id)[0]
                .name}
        </Typography>
        <CustomizedButton
          variant="contained"
          onClick={chat.isGroupChat ? handleOpenGroupModal : handleOpenModal}
        >
          <Visibility />
        </CustomizedButton>
      </Header>
      <MessageBox />
      {chat.isGroupChat ? (
        <UpdateGroupModal
          chat={chat}
          openGroupModal={openGroupModal}
          handleCloseGroupModal={handleCloseGroupModal}
        />
      ) : (
        <UserModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          user={chat.users.filter((chatUser) => chatUser._id !== user._id)[0]}
        />
      )}
    </>
  );
};

export default Chat;
