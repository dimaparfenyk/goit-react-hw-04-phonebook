import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderNav = styled.header`
    padding-top: 40px;
    padding-bottom: 40px;
    margin-right: -40px;
    display: flex;
    justify-content: center;
    background-color: #f4ebdb;
`;

export const StyledLink = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  margin-right: 40px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
    transition-duration:300ms;
  }
`;

