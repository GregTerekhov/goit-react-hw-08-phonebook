import { AuthLinksList, AuthLinksItem, AuthLink } from './AuthLinks.styled';

export const AuthLinks = () => {
  return (
    <AuthLinksList>
      <AuthLinksItem>
        <AuthLink to="/login">Login</AuthLink>
      </AuthLinksItem>
      <AuthLinksItem>
        <AuthLink to="/register">Register</AuthLink>
      </AuthLinksItem>
    </AuthLinksList>
  );
};
