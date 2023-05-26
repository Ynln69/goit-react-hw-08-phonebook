import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterSection, RegisterBox } from './Register.styled';

// import IconProfile from '../images/icon-profile.png';

const Register = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        {/* <UserIcon src={IconProfile} alt="" width="150px" />*/}
        <h2>Sing Up</h2>
        <RegisterForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Register;
