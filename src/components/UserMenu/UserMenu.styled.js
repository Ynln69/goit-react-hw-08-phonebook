import styled from '@emotion/styled';

export const Userbox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonIcon = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  border-radius: 50%;
  background-color: transparent;
  transition: box-shadow 0.3s ease-in-out;
  align-items: center;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
