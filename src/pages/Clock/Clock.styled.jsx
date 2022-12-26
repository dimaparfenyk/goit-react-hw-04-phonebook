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
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
width: 120px;
height: 40px;
border-radius: 8px;
border:none;
color: #fff;
background-color: #07c;
text-transform: uppercase;
cursor:pointer;

:hover,
:focus{
    scale:1.02;
    transition-duration:250ms;
}
 `