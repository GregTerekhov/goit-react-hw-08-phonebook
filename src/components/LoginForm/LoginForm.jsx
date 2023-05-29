import { useAuth } from 'hooks/useAuth';

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
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};
