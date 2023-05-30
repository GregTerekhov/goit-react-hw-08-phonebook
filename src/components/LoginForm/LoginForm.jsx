import { useAuth } from 'hooks/useAuth';
import {
  LogInForm,
  LogInLabel,
  LogInInput,
  LogInButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const { logIn } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    logIn({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    form.reset();
  };

  return (
    <>
      <LogInForm onSubmit={handleSubmit} autoComplete="off">
        <LogInLabel>
          Email
          <LogInInput type="email" name="email" />
        </LogInLabel>
        <LogInLabel>
          Password
          <LogInInput type="password" name="password" />
        </LogInLabel>
        <LogInButton>Login</LogInButton>
      </LogInForm>
    </>
  );
};
