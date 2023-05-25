import { useAuth } from 'hooks';
import { Link } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </nav>
  );
};

export default Navigation;
