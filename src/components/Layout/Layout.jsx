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
  NavLinksItem,
  NavigationLink,
  Container,
  Section,
} from './Layout.styled';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <Container>
          <NavContainer>
            <NavList>
              <NavLinksItem>
                <NavigationLink to="/">Home</NavigationLink>
              </NavLinksItem>
              {isLoggedIn && (
                <NavLinksItem>
                  <NavigationLink to="/contacts">Contacts</NavigationLink>
                </NavLinksItem>
              )}
            </NavList>
            <div>{isLoggedIn ? <UserMenu /> : <AuthLinks />}</div>
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
      <footer>Footer</footer>
    </>
  );
};
