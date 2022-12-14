import { useState } from 'react';

import { IconButton, InputLabel, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  CustomizedFormControl,
  CustomizedInput,
} from './password-input.styles';

export default function InputAdornments({ id, name, label, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CustomizedFormControl variant="standard">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <CustomizedInput
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </CustomizedFormControl>
  );
}
