import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

import {
  AuthenticationContainer,
  AuthLink,
  FormContainer,
  Logo,
  LogoContaner,
  TabContainer,
} from './authentication.styles';

const Authentication = () => {
  const [activeTab, setActiveTab] = useState(
    window.location.href.includes('/signup') ? 'signup' : 'login'
  );

  const handleOnClick = (event) => {
    setActiveTab(event.target.name);
  };

  return (
    <AuthenticationContainer disableGutters maxWidth="sm">
      <LogoContaner>
        <Logo>One Touch</Logo>
      </LogoContaner>
      <FormContainer>
        <TabContainer>
          <AuthLink
            to="/auth"
            active={activeTab === 'login' ? 1 : 0}
            name="login"
            onClick={handleOnClick}
          >
            Login
          </AuthLink>
          <AuthLink
            to="signup"
            active={activeTab === 'signup' ? 1 : 0}
            name="signup"
            onClick={handleOnClick}
          >
            Sign Up
          </AuthLink>
        </TabContainer>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Routes>
      </FormContainer>
    </AuthenticationContainer>
  );
};

export default Authentication;
