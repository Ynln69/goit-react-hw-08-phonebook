import { ToastContainer } from 'react-toastify';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';

import { refreshUser } from 'redux/auth/operations';

import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import NotFound from 'components/NotFound';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const PhonebookPage = lazy(() => import('../../pages/Phonebook'));
const About = lazy(() => import('../../pages/AboutPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </>
  );
};

export default App;
