import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import LogInIcon from './../../images/login.png';
import { ButtonIcon } from 'components/UserMenu/UserMenu.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <ButtonIcon type="submit">
        <img src={LogInIcon} alt="Изображение" width="40px" height="40px" />
      </ButtonIcon>
    </form>
  );
};

export default LoginForm;
