import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { LogInBox, LogInTitle } from './Login.styled';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LogInBox>
        <LogInTitle>Log In</LogInTitle>
        <LoginForm />
      </LogInBox>
    </>
  );
};

export default Login;
