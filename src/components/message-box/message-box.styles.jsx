import { styled, Box, TextField, Button } from '@mui/material';
import ScrollableFeed from 'react-scrollable-feed';

export const MessageBoxContainer = styled(Box)`
  background-color: var(--color-gray-light-1);
  border-radius: 2px;
  margin: 10px 0;
  height: calc(100% - 46.5px);
  height: calc(100vh - 210px);
  position: relative;
`;

export const MessageContainer = styled(ScrollableFeed)`
  padding: 10px;
  padding-right: 0;
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

export const SendMessageForm = styled('form')`
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-gap: 10px;

  background-color: var(--color-primary);
  position: absolute;
  width: calc(100% - 20px);
  bottom: 10px;
`;

export const CustomizedTextField = styled(TextField)`
  display: block;

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
`;
