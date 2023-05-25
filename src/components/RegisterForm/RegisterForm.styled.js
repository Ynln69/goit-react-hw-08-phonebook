import styled from '@emotion/styled';

export const FormRegist = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  > label {
    position: relative;
    border: 2px solid #111111;
    border-radius: 40px;
    padding: 20px 40px;
    > input {
      background-color: transparent;
      border: none;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.01em;
      outline: none;
    }
  }
`;

export const BtnHide = styled.button`
  position: absolute;
  right: 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  background-color: cadetblue;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.01em;
`;
