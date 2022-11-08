import { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';
import { Logo, NavigationContainer } from './navigation.styles';

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(useTheme());
  return (
    <NavigationContainer>
      <Tooltip title="Search Users to chat" arrow>
        <Button variant="text">
          <Search />
          <Typography variant="">Search User</Typography>
        </Button>
      </Tooltip>

      <Logo>One Touch</Logo>

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="outline"
        >
          <Notifications />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
