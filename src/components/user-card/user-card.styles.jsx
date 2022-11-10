import { styled, Box, Avatar, Typography } from '@mui/material';

export const CardContainer = styled(Box)`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: repeat(2, 20px);
  grid-gap: 10px;

  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
  }
`;

export const CustomizedAvatar = styled(Avatar)`
  height: 50px;
  width: 50px;
`;

export const Name = styled(Typography)`
  font-size: 16px;
  grid-column: 2/3;
`;

export const Text = styled(Typography)`
  font-size: 14px;
  grid-column: 2/3;
`;
