import { useAuth } from 'hooks';
import { NavContainer } from './navigation.styled';
import { Link } from 'components/AppBar/appBar.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavContainer>
  );
};

export default Navigation;
