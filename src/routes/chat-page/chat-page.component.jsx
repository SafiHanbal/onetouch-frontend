import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from '../../components/navigation/navigation.component';
import MyChats from '../../components/my-chats/my-chats.component';
import ChatBox from '../../components/chat-box/chat-box.component';

import { selectUser } from '../../store/user/user-selector';
import { ChatContainer } from './chat-page.styles';

const ChatPage = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) navigate('/auth');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Navigation />
      <ChatContainer>
        <MyChats />
        <ChatBox />
      </ChatContainer>
    </>
  );
};

export default ChatPage;
