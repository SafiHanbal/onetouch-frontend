import { styled, Box, TextField } from '@mui/material';

export const SideDrawerContainer = styled(Box)`
  width: 350px;
`;

export const Form = styled('form')`
  display: flex;
  padding: 10px 10px 0;

  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--color-white);
`;

export const CustomizedTextField = styled(TextField)`
  width: 100%;
  margin-right: 10px;

  & input {
    font-size: inherit;
    font-family: inherit;
    padding: 10px;
  }
`;

export const UsersList = styled(Box)`
  margin: 10px 0;
`;
