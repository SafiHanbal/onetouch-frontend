import { useState } from 'react';

import { Box, Button, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { Search } from '@mui/icons-material';

import Notification from '../notification/notification.component';
import Profile from '../profile/profile.component';
import SideDrawer from '../side-drawer/side-drawer.component';

import {
  Logo,
  NavigationContainer,
  RightNavContainer,
} from './navigation.styles';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const tabView = useMediaQuery('(max-width: 900px)');

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsActive(!isActive);
  };

  return (
    <NavigationContainer>
      <Box>
        <SideDrawer isActive={isActive} toggleDrawer={toggleDrawer} />
        <Tooltip title="Search Users to chat" arrow>
          <Button variant="text" onClick={toggleDrawer}>
            <Search />
            {!tabView && <Typography>Search User</Typography>}
          </Button>
        </Tooltip>
      </Box>

      <Logo>One Touch</Logo>

      <RightNavContainer>
        <Notification />
        <Profile />
      </RightNavContainer>
    </NavigationContainer>
  );
};

export default Navigation;
