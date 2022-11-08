import { Box } from '@mui/material';
import Navigation from '../../components/navigation/navigation.component';
import MyChats from '../../components/my-chats/my-chats.component';
import ChatBox from '../../components/chat-box/chat-box.component';

const ChatPage = () => {
  return (
    <>
      <Navigation />
      <Box>
        <MyChats />
        <ChatBox />
      </Box>
    </>
  );
};

export default ChatPage;
