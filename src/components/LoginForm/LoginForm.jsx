import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormRegist } from 'components/RegisterForm/RegisterForm.styled';
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
    <FormRegist onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <ButtonIcon type="submit">Login In</ButtonIcon>
    </FormRegist>
  );
};

export default LoginForm;
