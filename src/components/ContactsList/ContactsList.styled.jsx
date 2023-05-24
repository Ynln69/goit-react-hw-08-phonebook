import styled from '@emotion/styled';

export const ListOfContact = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemButton = styled.button`
  padding: 5px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #fa8072;
  font-weight: 700;
  font-size: 15px;
  color: currentColor;

  &:hover {
    background-color: #8b0000;
  }
`;
