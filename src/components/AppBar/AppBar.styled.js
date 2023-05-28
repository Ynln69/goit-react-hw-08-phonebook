import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  background-color: #243238;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
`;

export const Link = styled(NavLink)`
  border-radius: 4px;

  color: #fff;
  font-weight: 900;
  text-decoration: none;
  text-align: center;

  &.active {
    color: #9cc9f5;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
  }
`;
