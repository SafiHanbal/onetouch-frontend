import { UserBadgeContainer, Name, CloseIcon } from './user-badge.styles';

const UserBadge = ({ user, removeUser, isAdmin = true }) => {
  const handleOnClick = () => {
    removeUser(user);
  };

  return (
    <UserBadgeContainer variant="contained">
      <Name>{user.name}</Name>
      {isAdmin && <CloseIcon onClick={handleOnClick} />}
    </UserBadgeContainer>
  );
};

export default UserBadge;
