import styled from '@emotion/styled';

export const FormBox = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px -1px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  &:hover,
  &:focus {
    box-shadow: 1px 1px 10px 10px #e6e6fa;
  }
  > p {
    text-align: center;
    font-size: 25px;
    margin-top: 15px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 30px;
  color: #f0f8ff;
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;

  font-family: cursive;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
`;

export const FormInput = styled.input`
  padding: 4px;
  border: none;
  border-radius: 3px;
  outline: none;
  color: #fff;
  background-color: #2f303a;
  font-size: 20px;
  font-family: inherit;
`;

export const FormButton = styled.button`
  padding: 5px 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #0000ff;
  font-weight: 700;
  font-size: 15px;
  color: currentColor;
  &:hover {
    background-color: #00008b;
  }
`;
