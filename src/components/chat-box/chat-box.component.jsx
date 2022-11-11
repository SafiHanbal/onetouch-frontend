import { useSelector } from 'react-redux';

import { ChatBoxContainer, NoSelectedChatMessage } from './chat-box.styles';

import { selectSelectedChat } from '../../store/chat/chat-selector';
import Chat from '../chat/chat.component';

const ChatBox = () => {
  const selectedChat = useSelector(selectSelectedChat);

  return (
    <ChatBoxContainer>
      {selectedChat ? (
        <Chat chat={selectedChat} />
      ) : (
        <NoSelectedChatMessage variant="h6">
          No selected chats. Click on a user to start chatting.
        </NoSelectedChatMessage>
      )}
    </ChatBoxContainer>
  );
};

export default ChatBox;
