import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginForm from '../../components/login-form/login-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

import { selectUser } from '../../store/user/user-selector';

import {
  AuthenticationContainer,
  AuthLink,
  FormContainer,
  Logo,
  LogoContainer,
  TabContainer,
} from './authentication.styles';

const Authentication = () => {
  const naviagte = useNavigate();
  const user = useSelector(selectUser);

  const [activeTab, setActiveTab] = useState(
    window.location.href.includes('/signup') ? 'signup' : 'login'
  );

  const handleOnClick = (event) => {
    setActiveTab(event.target.name);
  };

  useEffect(() => {
    if (user) naviagte('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AuthenticationContainer disableGutters maxWidth="sm">
      <LogoContainer>
        <Logo variant="p">One Touch</Logo>
      </LogoContainer>
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
