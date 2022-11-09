import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, CustomizedTextField, SubmitButton } from './login-form.styles';
import PasswordInput from '../password-input/password-input.component';

import { loginUserAsync } from '../../store/user/user-action';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginUserAsync(formFields));
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
