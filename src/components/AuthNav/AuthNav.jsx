import { NavLink } from 'react-router-dom';
import { AuthNavBox } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavBox>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavBox>
  );
};

export default AuthNav;
