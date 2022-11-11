import { useDispatch, useSelector } from 'react-redux';

import { accessChatAsync, setSelectedChat } from '../../store/chat/chat-action';
import { selectUser } from '../../store/user/user-selector';

import {
  CardContainer,
  CustomizedAvatar,
  Name,
  Text,
} from './user-card.styles';

const UserCard = ({
  user,
  isChat,
  isActive,
  toggleDrawer,
  addUser,
  isGroupChat,
  chat,
  groupChatHandler,
}) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);

  const handleOnClick = (event) => {
    if (addUser) {
      groupChatHandler(user);
    } else if (isGroupChat) {
      dispatch(setSelectedChat(chat));
    } else {
      dispatch(accessChatAsync(user._id));
      if (isActive) toggleDrawer();
    }
  };

  const getLatestMessage = () => {
    if (!chat?.latestMessage) return '';
    const message = chat.latestMessage;

    if (chat.isGroupChat) {
      return `${
        message.sender._id === loggedUser._id
          ? 'You:'
          : message.sender.name.split(' ')[0] + ':'
      }  ${message.content}`;
    } else {
      return `${message.sender._id === loggedUser._id ? 'You:' : ''}  ${
        message.content
      }`;
    }
  };

  return (
    <CardContainer mini={addUser} onClick={handleOnClick}>
      {isGroupChat ? (
        <CustomizedAvatar>{chat.chatName[0].toUpperCase()}</CustomizedAvatar>
      ) : (
        <CustomizedAvatar src={user.image} mini={addUser} />
      )}
      <Name mini={addUser}>{isGroupChat ? chat.chatName : user.name}</Name>
      <Text mini={addUser}>
        {isChat || isGroupChat ? getLatestMessage() : user.email}
      </Text>
    </CardContainer>
  );
};

export default UserCard;
