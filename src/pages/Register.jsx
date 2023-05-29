import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <h1>Registration</h1>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
