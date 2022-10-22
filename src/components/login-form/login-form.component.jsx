import { useState } from 'react';

import { Form, Input, SubmitButton } from './login-form.styles';
import PasswordInput from '../password-input/password-input.component';

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

  return (
    <Form>
      <Input
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

      <SubmitButton variant="contained">Login</SubmitButton>
    </Form>
  );
};

export default LoginForm;
