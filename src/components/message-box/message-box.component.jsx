import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAllMessagesAsync,
  sendMessageAsync,
} from '../../store/message/message-action';

import { selectMessages } from '../../store/message/message-selector';
import { selectSelectedChat } from '../../store/chat/chat-selector';

import {
  MessageContainer,
  SendMessageForm,
  CustomizedTextField,
  CustomizedButton,
  MessageBoxContainer,
} from './message-box.styles';

import Message from '../message/message.component';

const MessageBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const selectedChat = useSelector(selectSelectedChat);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    dispatch(getAllMessagesAsync(selectedChat._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChat]);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!newMessage) return;

    dispatch(
      sendMessageAsync({ chatId: selectedChat._id, content: newMessage })
    );
    setNewMessage('');
  };

  const handleOnChange = (event) => {
    setNewMessage(event.target.value);
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
