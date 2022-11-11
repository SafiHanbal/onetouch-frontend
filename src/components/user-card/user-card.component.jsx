import { useDispatch } from 'react-redux';

import { accessChatAsync } from '../../store/chat/chat-action';

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
  groupName,
  groupChatHandler,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    if (addUser) {
      groupChatHandler(user);
    } else {
      dispatch(accessChatAsync(user._id));
      if (isActive) toggleDrawer();
    }
  };

  return (
    <CardContainer addUser={addUser} onClick={handleOnClick}>
      {isGroupChat ? (
        <CustomizedAvatar>{groupName[0].toUpperCase()}</CustomizedAvatar>
      ) : (
        <CustomizedAvatar src={user.image} addUser={addUser} />
      )}
      <Name addUser={addUser}>{isGroupChat ? groupName : user.name}</Name>
      <Text addUser={addUser}>{isChat || isGroupChat ? '' : user.email}</Text>
    </CardContainer>
  );
};

export default UserCard;
