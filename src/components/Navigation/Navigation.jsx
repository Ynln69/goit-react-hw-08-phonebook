import { useAuth } from 'hooks';
import { NavContainer } from './Navigation.styled';
import { Link } from 'components/AppBar/AppBar.styled';
import Logo from '../../images/logo.png';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <img src={Logo} alt="logo" width="163px" />
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavContainer>
  );
};

export default Navigation;
