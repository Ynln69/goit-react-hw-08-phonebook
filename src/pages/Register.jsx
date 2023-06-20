import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterSection, RegisterBox } from './register.styled';

const Register = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <h2>Sing Up</h2>
        <RegisterForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Register;
