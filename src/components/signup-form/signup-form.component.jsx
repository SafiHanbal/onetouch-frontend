import { useState } from 'react';

import { Input } from '../login-form/login-form.styles';
import PasswordInput from '../password-input/password-input.component';
import { SubmitButton, UploadButton } from './signup-form.styles';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  pic: {},
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name !== 'pic') setFormFields({ ...formFields, [name]: value });
    else setFormFields({ ...formFields, pic: event.target.files[0] });
  };

  console.log(formFields);

  return (
    <form>
      <Input
        variant="standard"
        label="Name"
        name="name"
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <Input
        variant="standard"
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleOnChange}
      />
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        value={password}
        onChange={handleOnChange}
      />
      <PasswordInput
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleOnChange}
      />
      <UploadButton variant="contained" component="label">
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          name="pic"
          onChange={handleOnChange}
        />
      </UploadButton>
      <SubmitButton variant="contained">Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
