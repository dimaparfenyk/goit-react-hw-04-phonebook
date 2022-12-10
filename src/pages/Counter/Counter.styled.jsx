import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items: center;
padding:40px;
margin-right:-20px;
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
padding: 8px;
width: 160px;
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

export const Text = styled.p`
margin-right:20px;
font-size: 28px;
`