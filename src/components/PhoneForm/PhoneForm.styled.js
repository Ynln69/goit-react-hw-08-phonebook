import styled from '@emotion/styled';

export const FormBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  box-shadow: 0px 0px 15px 10px #f1f1f1;
  border-radius: 5px;

  background-color: #fcfdfd;
  > p {
    text-align: center;
    font-size: 25px;
    margin-top: 15px;
  }
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 8px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  color: #495057;
  background-clip: padding-box;
  background-color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  > svg {
    fill: currentcolor;
  }
  &:focus,
  &:hover {
    box-shadow: 0px 1px 9px 2px darkgray;
  }
`;

export const FormInput = styled.input`
  border: none;
  outline: none;

  color: currentcolor;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;
`;

export const FormButton = styled.button`
  padding: 8px 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  opacity: 0.8;

  color: #fff;
  background-color: #3e7e80;
  font-size: 15px;
  &:hover {
    opacity: 1;
  }
`;
