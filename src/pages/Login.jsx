import LoginForm from 'components/LoginForm/LoginForm';
import { RegisterBox, RegisterSection } from './register.styled';

const Login = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <h2>Sing In</h2>
        <LoginForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Login;
