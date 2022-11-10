import { styled, Box } from '@mui/material';

export const MyChatsContainer = styled(Box)`
  background-color: var(--color-primary);
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
  padding: 10px;
`;

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
`;

export const MyChatsList = styled(Box)`
  background-color: var(--color-gray-light-1);
  border-radius: 2px;
  padding: 10px;
  margin-top: 10px;
  height: calc(100% - 46.5px);
`;
