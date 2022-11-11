import { UserBadgeContainer, Name, CloseIcon } from './user-badge.styles';

const UserBadge = ({ user, removeUser }) => {
  const handleOnClick = () => {
    removeUser(user);
  };

  return (
    <UserBadgeContainer variant="contained">
      <Name>{user.name}</Name>
      <CloseIcon onClick={handleOnClick} />
    </UserBadgeContainer>
  );
};

export default UserBadge;
