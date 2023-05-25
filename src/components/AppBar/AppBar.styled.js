import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
`;

export const Link = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 4px;

  color: #483d8b;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: #483d8b;
    box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15);
    border-radius: 100px;
  }
`;
