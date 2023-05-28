import { HomeSection, HomeTitle, TextBox, Border } from './Home.styled';
import Phone from '../images/phone.png';
import Logo from '../images/logo.png';

const Home = () => {
  return (
    <HomeSection>
      <TextBox>
        <HomeTitle>
          {' '}
          Streamline your <br /> contacts <br />
          effortlessly
        </HomeTitle>
        <Border></Border>
        <img src={Logo} alt="logo" width="200px" />
      </TextBox>
      <div>
        <img src={Phone} alt="smartphone" />
      </div>
    </HomeSection>
  );
};

export default Home;
