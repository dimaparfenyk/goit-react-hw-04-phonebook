import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding:40px 15px 0 15px;
`

export const ClockFace = styled.p`
font-weight:700;
font-size:32px;
margin-bottom:32px;
`
export const Button = styled.button`
display:flex;
  align-items:center;
  justify-content:center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  text-transform: uppercase;
  width:180px;
  height: 30px;
  color: ${p => p.theme.colors.white};
  background-color: #07c;
  border:none;
  border-radius: 8px;
  cursor:pointer
 `