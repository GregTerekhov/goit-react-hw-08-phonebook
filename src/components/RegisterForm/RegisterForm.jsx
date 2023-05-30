import { useAuth } from 'hooks/useAuth';
import {
  RegisterFormEl,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const { register } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  };

  return (
    <>
      <RegisterFormEl onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Name
          <RegisterInput type="text" name="name" />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput type="password" name="password" />
        </RegisterLabel>
        <RegisterButton>Register</RegisterButton>
      </RegisterFormEl>
    </>
  );
};
