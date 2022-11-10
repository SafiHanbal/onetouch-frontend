import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Add } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';

import { getMyChatsAsync } from '../../store/chat/chat-action';
import { selectMyChats } from '../../store/chat/chat-selector';
import { selectUser } from '../../store/user/user-selector';

import { MyChatsContainer, Header, MyChatsList } from './my-chats.styles';
import UserCard from '../user-card/user-card.component';

const MyChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector(selectMyChats);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getMyChatsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyChatsContainer>
      <Header>
        <Typography variant="h5">My Chats</Typography>
        <Button variant="contained">
          New Group Chat <Add />
        </Button>
      </Header>
      <MyChatsList>
        {chats.length &&
          chats.map((chat) => {
            const secondUser = chat.users.filter(
              (el) => user._id !== el._id
            )[0];
            return (
              <UserCard key={secondUser._id} user={secondUser} isChat={true} />
            );
          })}
      </MyChatsList>
    </MyChatsContainer>
  );
};

export default MyChat;
