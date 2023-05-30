import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const { isRefreshing, fetchCurrentUser } = useAuth();
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      {isRefreshing ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={<PublicRoute component={Register} redirectTo="/login" />}
            />
            <Route
              path="login"
              element={<PublicRoute component={Login} redirectTo="/contacts" />}
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
