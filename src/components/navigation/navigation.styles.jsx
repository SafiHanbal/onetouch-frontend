import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const NavigationContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px;
  padding: 5px 10px;
  background-color: var(--color-primary);
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
`;

export const Logo = styled('p')`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -1px;
  line-height: 1;
  text-shadow: 0 2px 2px rgba(var(--color-black-rgb), 0.3);
`;

export const AvatarContainer = styled(Box)`
  text-align: center;
  display: inline-block;
`;

export const RightNavContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
