import { AuthLinks } from 'components/AuthLinks/AuthLinks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet, NavLink } from 'react-router-dom';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <main>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>

        {isLoggedIn ? <UserMenu /> : <AuthLinks />}

        <Outlet />
      </main>
    </>
  );
};

export default Home;
