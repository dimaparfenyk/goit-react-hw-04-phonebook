import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom:-20px;
    border-radius: 8px;
    padding: 60px;
    border: 2px dashed #00cc71;
`
export const ListItem = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom:20px;
    width:260px;
    border: 2px solid #00cc71;
    padding: 20px;
    border-radius: 8px;
`
export const Name = styled.p`
font-size: 20px;
font-weight: 600;
margin-right:10px;
`

export const Number = styled.p`
    font-size: 18px;
    font-weight: 500;
`
export const StyledNavLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  cursor:pointer;
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.primary};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    transition-duration:300ms;
  }
`