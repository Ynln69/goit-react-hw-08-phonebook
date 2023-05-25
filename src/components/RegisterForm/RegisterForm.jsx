import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import SingUpIcon from './../../images/sign-up.png';
import { ButtonIcon } from 'components/UserMenu/UserMenu.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="text" name="name" placeholder="Enter your name" />
      </label>
      <label>
        <input type="email" name="email" placeholder="Enter email" />
      </label>
      <label>
        <Input
          type={show ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
        />
        <Button type="button" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </label>
      <ButtonIcon type="submit">
        <img src={SingUpIcon} alt="Изображение" width="40px" height="40px" />
      </ButtonIcon>
    </form>
  );
};
