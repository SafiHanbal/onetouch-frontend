import { styled, Box } from '@mui/material';

export const MyChatsContainer = styled(Box)`
  background-color: var(--color-primary);
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
  padding: 10px;
  position: relative;
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

  height: calc(100vh - 156.5px);
  width: calc(100%-20px);
  overflow: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 2px;
    height: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
