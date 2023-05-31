import { useAuth } from 'hooks/useAuth';
import { UserMenuBox, UserIcon, ExitButton, UserInfo } from './UserMenu.styled';

export const UserMenu = () => {
  const { user, logOut } = useAuth();

  return (
    <UserMenuBox>
      <UserInfo>
        <UserIcon />
        <span>Welcome, {user.email}!</span>
      </UserInfo>
      <ExitButton type="button" onClick={() => logOut()}>
        Exit
      </ExitButton>
    </UserMenuBox>
  );
};
