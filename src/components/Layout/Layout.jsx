import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthLinks } from 'components/AuthLinks/AuthLinks';
import Loader from 'components/Loader';
import {
  Header,
  NavContainer,
  NavList,
  NavigationLink,
  Container,
  Section,
} from './Layout.styled';
// import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <Container>
          <NavContainer>
            <NavList>
              <li>
                <NavigationLink to="/">Home</NavigationLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavigationLink to="/contacts">Contacts</NavigationLink>
                </li>
              )}
            </NavList>
            {isLoggedIn ? <UserMenu /> : <AuthLinks />}
          </NavContainer>
        </Container>
      </Header>

      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
      {/* <Footer /> */}
    </>
  );
};
