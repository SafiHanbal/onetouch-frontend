import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { Logout } from '@mui/icons-material';

import UserModal from '../user-modal/user-modal.component';
import {
  AvatarContainer,
  CustomizedAvatar,
  ProfileContainer,
} from './profile.styles';

import { logoutUserAsync } from '../../store/user/user-action';
import { selectUser } from '../../store/user/user-selector';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (event) => {
    dispatch(logoutUserAsync());
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <ProfileContainer>
      <AvatarContainer>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <CustomizedAvatar>
              {user?.name?.split('')[0].toUpperCase()}
            </CustomizedAvatar>
          </IconButton>
        </Tooltip>
      </AvatarContainer>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleOpenModal}>
          <Avatar src={user?.image} /> Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <UserModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        user={user}
      />
    </ProfileContainer>
  );
};

export default Profile;
