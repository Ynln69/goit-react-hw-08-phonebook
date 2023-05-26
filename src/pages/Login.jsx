import LoginForm from 'components/LoginForm/LoginForm';
import { RegisterBox, RegisterSection } from './Register.styled';

// import IconProfile from '../images/icon-profile.png';
// import ImageForm from '../images/image-form.jpg';

const Login = () => {
  return (
    <RegisterSection>
      <RegisterBox>
        {/* <img src={IconProfile} alt="" width="150px" />
        <img src={ImageForm} alt="" width="350px" /> */}
        <h2>Sing In</h2>
        <LoginForm />
      </RegisterBox>
    </RegisterSection>
  );
};

export default Login;
