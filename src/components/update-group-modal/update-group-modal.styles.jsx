import { styled, Box, Typography, Button, TextField } from '@mui/material';

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  background-color: var(--color-primary);
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);

  @media only screen and (max-width: 500px) {
    width: 300px;
  }
`;

export const Name = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
  line-height: 1;
`;

export const UpdateNameForm = styled('form')`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;

  margin-top: 4px;
`;

export const UserBadgeContainer = styled(Box)``;

export const CustomizedTextFields = styled(TextField)`
  display: block;
  margin-bottom: 15px;

  & .MuiInputBase-root {
    width: 100%;
  }

  & label {
    font-size: 16px;
    line-height: 1;
  }

  & input {
    font-size: 16px;
    padding: 10px;
  }
`;

export const CustomizedButton = styled(Button)`
  font-size: 14px;
  padding: 15px;
  line-height: 1;
  margin-bottom: 15px;
  float: right;
`;

export const UsersList = styled(Box)`
  display: ${({ display }) => (display ? 'block' : 'none')};
  background-color: var(--color-gray-light-1);
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
`;
