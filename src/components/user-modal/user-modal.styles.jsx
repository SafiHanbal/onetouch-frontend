import { styled, Box, Avatar, Typography, Button } from '@mui/material';

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
`;

export const Name = styled(Typography)`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 10px;
`;

export const CustomizedAvatar = styled(Avatar)`
  height: 150px;
  width: 150px;
  margin: 0 auto 10px;
`;

export const Email = styled(Typography)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const CloseButton = styled(Button)`
  float: right;
`;
