import { Button, styled, TextField } from '@mui/material';

export const Input = styled(TextField)`
  display: block;

  & .MuiInputBase-root {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const UploadButton = styled(Button)`
  transform: scale(0.8);
  transform-origin: 0 50%;
  background-color: var(--color-secondary);
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  background-color: var(--color-secondary);
  margin-top: 10px;
`;
