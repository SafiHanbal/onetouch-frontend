import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/user-selector';

import { Content, MessageContainer, Name } from './message.styles';

const Message = ({ isGroupChat, message, firsMessage }) => {
  const user = useSelector(selectUser);

  const getSender = () => {
    return user._id === message.sender._id ? '' : message.sender.name;
  };

  return (
    <MessageContainer got={getSender()}>
      {isGroupChat && firsMessage ? <Name>{getSender()}</Name> : ''}
      <Content>{message.content}</Content>
    </MessageContainer>
  );
};

export default Message;
