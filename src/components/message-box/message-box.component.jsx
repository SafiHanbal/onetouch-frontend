import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllMessagesAsync,
  sendMessageAsync,
} from '../../store/message/message-action';

import { selectMessages } from '../../store/message/message-selector';
import { selectSelectedChat } from '../../store/chat/chat-selector';
import { selectUser } from '../../store/user/user-selector';

import {
  MessageContainer,
  SendMessageForm,
  CustomizedTextField,
  CustomizedButton,
  MessageBoxContainer,
} from './message-box.styles';

import Message from '../message/message.component';
import TypingAnimation from '../typing-animation/typing-animation.component';

import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:8000';
let socket, selectedChatCompare;

const MessageBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const selectedChat = useSelector(selectSelectedChat);
  const user = useSelector(selectUser);

  const [newMessage, setNewMessage] = useState('');
  const [socketConnected, setSocketConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typing, setTyping] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('setup', user);
    socket.once('connected', () => setSocketConnected(true));
    socket.on('typing', () => setIsTyping(true));
    socket.on('stop typing', () => setIsTyping(false));
  }, [user]);

  useEffect(() => {
    if (!selectedChat) return;
    dispatch(getAllMessagesAsync(selectedChat._id));
    socket?.emit('join chat', selectedChat._id);
    selectedChatCompare = selectedChat;

    socket.on('message recieved', (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        // give notification
      } else {
        dispatch(getAllMessagesAsync(selectedChat._id));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChat]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    socket.emit('stop typing', selectedChat._id);

    if (!newMessage) return;

    const newMessageSocket = (sentMessage) =>
      socket.emit('new message', sentMessage);

    dispatch(
      sendMessageAsync(
        { chatId: selectedChat._id, content: newMessage },
        newMessageSocket
      )
    );

    setNewMessage('');
  };

  const handleOnChange = (event) => {
    setNewMessage(event.target.value);
    if (!socketConnected) return;
    // socket.emit('typing', selectedChat._id);
    if (!typing) {
      setTyping(true);
      socket.emit('typing', selectedChat._id);
    }

    setTimer(
      setTimeout(() => {
        clearTimeout(timer);
        setTyping(false);
        socket.emit('stop typing', selectedChat._id);
      }, 3000)
    );
  };

  return (
    <>
      <MessageBoxContainer>
        <MessageContainer>
          {messages.map((message, i) => {
            const isFirstMessage =
              message.sender._id !== messages[i - 1]?.sender._id;

            return (
              <Message
                key={message._id}
                isGroupChat={selectedChat.isGroupChat}
                message={message}
                firsMessage={isFirstMessage}
              />
            );
          })}
          {isTyping && !typing && <TypingAnimation />}
        </MessageContainer>
      </MessageBoxContainer>
      <SendMessageForm onSubmit={handleSendMessage}>
        <CustomizedTextField
          variant="outlined"
          placeholder="Message"
          value={newMessage}
          onChange={handleOnChange}
          autoComplete="off"
        />
        <CustomizedButton variant="contained" type="submit">
          Send
        </CustomizedButton>
      </SendMessageForm>
    </>
  );
};

export default MessageBox;
