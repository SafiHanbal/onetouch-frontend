import { styled, Box, Avatar, Typography } from '@mui/material';

export const CardContainer = styled(Box)`
  display: grid;
  grid-template-columns: ${({ mini }) => (mini ? '40px' : '50px')} 1fr;
  grid-template-rows: repeat(2, ${({ mini }) => (mini ? '16px' : '20px')});
  grid-gap: ${({ mini }) => (mini ? '6px' : '10px')};

  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
  }
`;

export const CustomizedAvatar = styled(Avatar)`
  background-color: var(--color-secondary);
  font-weight: 400;
  height: ${({ mini }) => (mini ? '40px' : '50px')};
  width: ${({ mini }) => (mini ? '40px' : '50px')};
`;

export const Name = styled(Typography)`
  font-size: ${({ mini }) => (mini ? '14px' : '16px')};
  grid-column: 2/3;
`;

export const Text = styled(Typography)`
  font-size: ${({ mini }) => (mini ? '12px' : '14px')};
  grid-column: 2/3;
  margin-top: -6px;
  color: var(--color-gray-dark-1);
`;
