import { styled, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthenticationContainer = styled(Container)`
  margin: 16px auto;
`;

export const LogoContaner = styled(Box)`
  text-align: center;
  padding: 10px 0;
  background-color: var(--color-primary);
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
`;

export const Logo = styled('p')`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-secondary);
  letter-spacing: -2px;
  line-height: 1;
  text-shadow: 0 2px 2px rgba(var(--color-black-rgb), 0.3);
`;

export const FormContainer = styled('div')`
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 2px;
  box-shadow: 0 4px 6px rgba(var(--color-black-rgb), 0.4);
`;

export const TabContainer = styled('div')`
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
