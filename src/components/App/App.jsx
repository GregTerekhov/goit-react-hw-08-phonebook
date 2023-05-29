import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import Loader from 'components/Loader';

const Home = lazy(() => import('../../pages/Home'));
const Register = lazy(() => import('../../pages/Register'));
const Login = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const { isRefreshing, fetchCurrentUser } = useAuth();
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <div>
      {isRefreshing ? (
        <h1>Show React Skeleton</h1>
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PublicRoute component={Home} />}>
              <Route
                path="register"
                element={<PublicRoute component={Register} restricted={true} />}
              />
              <Route
                path="login"
                element={
                  <PublicRoute component={Login} redirectTo="/contacts" />
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
};

// return (
//   <Suspense fallback={<p>Loading...</p>}>
//     <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="register" element={<Register />} />
//           <Route path="login" element={<Login />} />
//           <Route path="contacts" element={<Contacts />} />
//         </Route>
//     </Routes>
//   </Suspense>
// );
