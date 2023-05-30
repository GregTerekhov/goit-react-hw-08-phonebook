import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';
import { RegisterBox, RegisterTitle } from './Register.styled';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterBox>
        <RegisterTitle>Registration</RegisterTitle>
        <RegisterForm />
      </RegisterBox>
    </>
  );
};

export default Register;
