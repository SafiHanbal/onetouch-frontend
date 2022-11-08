import { useState } from 'react';

import { Form, CustomizedTextField, SubmitButton } from './login-form.styles';
import PasswordInput from '../password-input/password-input.component';

import { apiRequest } from '../../utils/api-request';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <CustomizedTextField
        variant="standard"
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleOnChange}
      />
      <PasswordInput
        id="password"
        label="Password"
        name="password"
        value={password}
        onChange={handleOnChange}
      />

      <SubmitButton variant="contained" type="submit">
        Login
      </SubmitButton>
    </Form>
  );
};

export default LoginForm;
