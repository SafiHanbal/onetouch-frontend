import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwipeableDrawer, Button } from '@mui/material';

import { searchUsersAsync } from '../../store/users/users-action';
import {
  selectUsers,
  selectUsersLoading,
} from '../../store/users/users-selector';

import {
  SideDrawerContainer,
  CustomizedTextField,
  Form,
  UsersList,
} from './side-drawer.styles';
import UserCardSkeleton from '../user-card-skeleton/user-card-skeleton.component';
import UserCard from '../user-card/user-card.component';

const SideDrawer = ({ isActive, toggleDrawer }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersLoading);

  const [searchStr, setSearchStr] = useState('');

  const handleOnChange = (event) => {
    setSearchStr(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(searchUsersAsync(searchStr));
  };

  return (
    <div>
      <>
        <SwipeableDrawer
          anchor={'left'}
          open={isActive}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <SideDrawerContainer>
            <Form onSubmit={handleOnSubmit}>
              <CustomizedTextField
                variant="outlined"
                placeholder="Search"
                value={searchStr}
                onChange={handleOnChange}
              />
              <Button variant="contained" type="submit">
                Go
              </Button>
            </Form>
            <UsersList>
              {isLoading
                ? [1, 2, 3, 4, 5, 6].map((el) => <UserCardSkeleton key={el} />)
                : users.map((user) => (
                    <UserCard
                      key={user._id}
                      user={user}
                      isActive={isActive}
                      toggleDrawer={toggleDrawer}
                    />
                  ))}
            </UsersList>
          </SideDrawerContainer>
        </SwipeableDrawer>
      </>
    </div>
  );
};

export default SideDrawer;
