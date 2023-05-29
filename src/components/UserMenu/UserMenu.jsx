import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user, logOut } = useAuth();
  //   const avatar = defaultAvatar;

  return (
    <div>
      <img src="" alt="" width="32" />
      <span>Welcome, {user.email}!</span>
      <button type="button" onClick={() => logOut()}>
        Exit
      </button>
    </div>
  );
};
