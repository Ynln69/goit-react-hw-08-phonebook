import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { logIn } from 'redux/auth/operations';

import { ReactComponent as OpenIcon } from './../../images/eye.svg';
import { ReactComponent as CloseIcon } from './../../images/eye-blocked.svg';

import {
  FormRegist,
  BtnHide,
} from 'components/RegisterForm/registerForm.styled';
import { ButtonIcon } from 'components/UserMenu/userMenu.styled';

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
        <input
          type={show ? 'text' : 'password'}
          name="password"
          placeholder="Password"
        />
        <BtnHide type="button" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <OpenIcon width="18px" /> : <CloseIcon width="18px" />}
        </BtnHide>
      </label>
      <ButtonIcon type="submit">Login</ButtonIcon>
    </FormRegist>
  );
};

export default LoginForm;
