import { styled, Box, Typography, TextField, Button } from '@mui/material';

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

export const Heading = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
`;

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
  float: right;
`;

export const UserBadgeContainer = styled(Box)``;

export const UsersList = styled(Box)`
  display: ${({ display }) => (display ? 'block' : 'none')};
  background-color: var(--color-gray-light-1);
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
`;
