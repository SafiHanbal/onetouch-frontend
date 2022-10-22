import { Button, styled, TextField } from '@mui/material';

export const Form = styled('form')``;

export const Input = styled(TextField)`
  display: block;

  & .MuiInputBase-root {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: var(--color-secondary);
  margin-top: 10px;
`;
