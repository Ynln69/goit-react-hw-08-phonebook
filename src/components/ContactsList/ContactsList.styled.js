import styled from '@emotion/styled';

export const ListOfContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  > div {
    display: flex;
    gap: 10px;
  }
  > input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
`;
export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #fa8072;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;

  background-color: #fa8072;

  &:hover {
    opacity: 1;
  }
`;

export const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #3e7e80;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;

  background-color: #3e7e80;

  &:hover {
    opacity: 1;
  }
`;
