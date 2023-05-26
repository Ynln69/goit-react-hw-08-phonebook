import styled from '@emotion/styled';
import BgSection from '../images/bg-registration.jpg';

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 130px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${BgSection});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const RegisterBox = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  padding-top: 40px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
  backdrop-filter: blur(2px);
  border-radius: 18px;

  background-color: rgba(0, 0, 0, 0.3);
  > h2 {
    color: #fff;
  }
`;

export const UserIcon = styled.img`
  position: absolute;
  left: 27%;
  top: -26%;
`;
