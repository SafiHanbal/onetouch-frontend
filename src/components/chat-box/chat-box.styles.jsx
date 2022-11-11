import { styled, Box, Typography } from '@mui/material';

export const ChatBoxContainer = styled(Box)`
  position: relative;
  background-color: var(--color-primary);
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
  padding: 10px;
`;

export const NoSelectedChatMessage = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  color: var(--color-gray-dark-2);
`;
