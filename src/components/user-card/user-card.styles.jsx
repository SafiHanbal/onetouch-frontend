import { styled, Box, Avatar, Typography } from '@mui/material';

export const CardContainer = styled(Box)`
  display: grid;
  grid-template-columns: ${({ addUser }) => (addUser ? '40px' : '50px')} 1fr;
  grid-template-rows: repeat(
    2,
    ${({ addUser }) => (addUser ? '16px' : '20px')}
  );
  grid-gap: ${({ addUser }) => (addUser ? '6px' : '10px')};

  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
  }
`;

export const CustomizedAvatar = styled(Avatar)`
  background-color: var(--color-secondary);
  font-weight: 400;
  height: ${({ addUser }) => (addUser ? '40px' : '50px')};
  width: ${({ addUser }) => (addUser ? '40px' : '50px')};
`;

export const Name = styled(Typography)`
  font-size: ${({ addUser }) => (addUser ? '14px' : '16px')};
  grid-column: 2/3;
`;

export const Text = styled(Typography)`
  font-size: ${({ addUser }) => (addUser ? '12px' : '14px')};
  grid-column: 2/3;
`;
