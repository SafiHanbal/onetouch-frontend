import { styled, Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthenticationContainer = styled(Container)`
  margin: 10px auto;
`;

export const LogoContainer = styled(Box)`
  text-align: center;
  padding: 10px 0;
  background-color: var(--color-primary);
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
`;

export const Logo = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -2px;
  line-height: 1;
  text-shadow: 0 2px 2px rgba(var(--color-black-rgb), 0.3);
`;

export const FormContainer = styled(Box)`
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
`;

export const TabContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 700;
  width: 50%;
  text-align: center;
  display: block;
  padding-bottom: 10px;
  border-bottom: ${({ active }) =>
    active ? '1px solid var(--color-secondary)' : 'none'};
`;
