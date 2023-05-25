import LoginForm from 'components/LoginForm/LoginForm';
import { RegisterBox, RegisterSection } from './Register.styled';

import IconProfile from '../images/icon-profile.png';

const Login = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <img src={IconProfile} alt="" width="200px" />
        <LoginForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Login;
