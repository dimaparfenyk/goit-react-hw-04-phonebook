import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom:-20px;
`
export const ListItem = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom:20px;
    width:260px;
    border: 2px solid #07c;
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