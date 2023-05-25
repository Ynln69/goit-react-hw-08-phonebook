import { useAuth } from 'hooks';
import { Link } from 'components/AppBar/AppBar.styled';
import Logo from '../../images/logo.png';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <img src={Logo} alt="logo" width="163px" />
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
