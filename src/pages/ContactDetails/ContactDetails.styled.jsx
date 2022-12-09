import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
padding:40px 15px 0 15px;
`

export const TextWrapper = styled.div`
margin:0 auto;
margin-bottom:-10px;
`

export const Text = styled.p`
font-size: 20px;
font-weight: 600;
margin-bottom:10px;
`

export const StyledLink = styled(NavLink)`
  display:flex;
  align-items:center;
  justify-content:center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  width:80px;
  height: 30px;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

