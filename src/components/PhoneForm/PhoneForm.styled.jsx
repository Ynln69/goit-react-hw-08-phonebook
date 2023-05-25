import styled from '@emotion/styled';

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-radius: 5px;
  > p {
    text-align: center;
    font-size: 25px;
    margin-top: 15px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 30px;
  color: #000;
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 20px;
`;

export const FormInput = styled.input`
border: none;
border-bottom: 1px solid black;
outline: none;

color: currentcolor;
background-color: transparent;
font-family: inherit;
font-size: 20px;
}
`;

export const FormButton = styled.button`
  padding: 15px 25px;
  border: 2px solid #4f2ee8;
  border-radius: 40px;
  cursor: pointer;

  background-color: transparent;
  font-weight: 700;
  font-size: 15px;
  color: currentColor;
  &:hover {
    background-color: #4f2ee8;
  }
`;
