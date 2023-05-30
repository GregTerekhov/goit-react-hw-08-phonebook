import { useAuth } from 'hooks/useAuth';
import { UserMenuBox, ExitButton } from './UserMenu.styled';

export const UserMenu = () => {
  const { user, logOut } = useAuth();
  //   const avatar = defaultAvatar;

  return (
    <UserMenuBox>
      <img src="" alt="" width="32" />
      <span>Welcome, {user.email}!</span>
      <ExitButton type="button" onClick={() => logOut()}>
        Exit
      </ExitButton>
    </UserMenuBox>
  );
};
