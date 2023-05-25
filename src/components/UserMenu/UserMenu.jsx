import { useDispatch } from 'react-redux';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Userbox, ButtonIcon } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Userbox>
      <AvatarGroup spacing="1rem">
        <Avatar src="https://bit.ly/broken-link" width="40px" height="40px" />
      </AvatarGroup>
      <p>Welcome, {user.name}</p>
      <ButtonIcon type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </ButtonIcon>
    </Userbox>
  );
};
export default UserMenu;
