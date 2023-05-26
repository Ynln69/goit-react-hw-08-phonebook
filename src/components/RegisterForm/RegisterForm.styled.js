import styled from '@emotion/styled';

export const FormRegist = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  > label {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 5px;
    padding: 0.375rem 0.75rem;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 0.25rem;

    color: rgb(73, 80, 87);
    fill: currentColor;
    background-clip: padding-box;
    background-color: rgb(255, 255, 255);
    font-size: 1rem;
    line-height: 1.5;
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
  > button {
    padding: 8px 18px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(62, 126, 128);
    font-size: 15px;
  }
`;

export const BtnHide = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  color: currentColor;
  background-color: transparent;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.01em;
  > svg {
    fill: currentColor;
  }
`;
