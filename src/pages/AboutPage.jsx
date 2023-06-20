import Img from '../images/imgfortext.png';
import {
  AboutSection,
  BoxInfo,
  BoxDesc,
  BoxText,
  Title,
} from './AboutPage.styled';

const AboutPage = () => {
  return (
    <AboutSection>
      <BoxInfo>
        <Title>
          "Phonebook" - is a simple and user-friendly tool for managing
          contacts, helping users organize their contact information with ease
          and ensuring accessibility.
        </Title>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/customer-support-executive-helping-customer-2996661-2500693.png?f=webp"
          alt="add contact"
          width="500"
        />
      </BoxInfo>
      <BoxText>
        <Title>
          The primary functionality of the application revolves around storing
          essential contact information, such as name, surname, and phone
          number. Also With this application, users can add, edit, and delete
          contacts.
        </Title>
      </BoxText>
      <BoxDesc>
        <Title>
          Additionally, the application includes a registration feature,
          allowing users to create accounts with unique usernames and passwords.
        </Title>
        <img src={Img} alt="" width="400" />
      </BoxDesc>
    </AboutSection>
  );
};
export default AboutPage;
