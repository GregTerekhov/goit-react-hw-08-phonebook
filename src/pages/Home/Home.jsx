import { useAuth } from 'hooks/useAuth';
import { HomeBox, AppTitle, AuthHomeLinks, AuthHomeList } from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <HomeBox>
        <AppTitle>Welcome to your Phonebook Application</AppTitle>
        {isLoggedIn ? (
          <AuthHomeLinks to={'/contacts'}>Contacts</AuthHomeLinks>
        ) : (
          <AuthHomeList>
            <li>
              <AuthHomeLinks to={'/login'}>Login</AuthHomeLinks>
            </li>
            <li>
              <AuthHomeLinks to={'/register'}>Register</AuthHomeLinks>
            </li>
          </AuthHomeList>
        )}
      </HomeBox>
    </>
  );
};

export default Home;
