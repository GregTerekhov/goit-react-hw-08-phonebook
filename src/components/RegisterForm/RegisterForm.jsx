import { useAuth } from 'hooks/useAuth';

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
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
