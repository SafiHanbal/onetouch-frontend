import { styled, Box, Typography } from '@mui/material';

export const MessageContainer = styled(Box)`
  background-color: ${({ got }) => (got ? '#a7e0af' : '#82c5ca')};
  width: fit-content;
  margin: ${({ got }) => (got ? 0 : '0 10px 0 auto')};
  margin-top: 4px;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const Name = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;

export const Content = styled(Typography)`
  font-size: 16px;
`;
