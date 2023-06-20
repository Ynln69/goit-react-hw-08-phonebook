import { AuthNavBox } from './authNav.styled';
import { Link } from 'components/AppBar/appBar.styled';

const AuthNav = () => {
  return (
    <AuthNavBox>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthNavBox>
  );
};

export default AuthNav;
