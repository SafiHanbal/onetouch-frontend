import { useDispatch } from 'react-redux';

import { accessChatAsync } from '../../store/chat/chat-action';

import {
  CardContainer,
  CustomizedAvatar,
  Name,
  Text,
} from './user-card.styles';

const UserCard = ({ user, isChat, isActive, toggleDrawer }) => {
  const dispatch = useDispatch();

  const handleOnClick = (event) => {
    dispatch(accessChatAsync(user._id));
    if (isActive) toggleDrawer();
  };
  return (
    <CardContainer onClick={handleOnClick}>
      <CustomizedAvatar src={user.image} />
      <Name>{user.name}</Name>
      <Text>{isChat ? '' : user.email}</Text>
    </CardContainer>
  );
};

export default UserCard;
