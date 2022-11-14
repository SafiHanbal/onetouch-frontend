import { styled, Box } from '@mui/material';

export const ChatContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin: 0 10px 10px;
  position: relative;

  position: absolute;
  width: calc(100vw - 20px);
  top: 80px;
  left: 0;
  bottom: 0;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;
