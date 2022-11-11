import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import { Visibility } from '@mui/icons-material';

import { CustomizedButton, Header } from './chat.styles';

import UserModal from '../user-modal/user-modal.component';
import UpdateGroupModal from '../update-group-modal/update-group-modal.component';

import { clearGroupChatUsers } from '../../store/users/users-action';
import { selectUser } from '../../store/user/user-selector';

const Chat = ({ chat }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [openGroupModal, setOpenGroupModal] = useState(false);
  const handleOpenGroupModal = () => setOpenGroupModal(true);
  const handleCloseGroupModal = () => {
    setOpenGroupModal(false);
    dispatch(clearGroupChatUsers());
  };

  return (
    <>
      <Header>
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
          user={chat}
        />
      )}
    </>
  );
};

export default Chat;
