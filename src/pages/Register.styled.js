import styled from '@emotion/styled';

export const RegisterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0;
`;

export const RegisterBox = styled.div`
  position: relative;
  padding-top: 140px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 30px;
  border: 2px solid #111111;
  border-radius: 18px;

  background: #f6f6f6;
  > img {
    position: absolute;
    left: 23%;
    top: -23%;
  }
`;
