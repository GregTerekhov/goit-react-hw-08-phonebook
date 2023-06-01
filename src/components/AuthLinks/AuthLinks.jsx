import { AuthLinksList, AuthLink } from './AuthLinks.styled';

export const AuthLinks = () => {
  return (
    <AuthLinksList>
      <li>
        <AuthLink to="/login">Login</AuthLink>
      </li>
      <li>
        <AuthLink to="/register">Register</AuthLink>
      </li>
    </AuthLinksList>
  );
};
