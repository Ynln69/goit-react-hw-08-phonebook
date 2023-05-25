import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterSection, RegisterBox } from './Register.styled';
import IconProfile from '../images/icon-profile.png';

const Register = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        <img src={IconProfile} alt="" width="200px" />
        <RegisterForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Register;
