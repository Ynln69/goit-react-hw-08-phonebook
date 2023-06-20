import { AuthNavBox } from './AuthNav.styled';
import { Link } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
  return (
    <AuthNavBox>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthNavBox>
  );
};

export default AuthNav;
