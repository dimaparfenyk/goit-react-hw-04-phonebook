import styled from "styled-components";

export const Box = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding:40px 15px 0 15px;
`

export const ColorWrapper = styled.div`
display:flex;
justify-content:center;
align-items: center;
`

export const ColorButton = styled.button`
width: 100px;
height: 100px;
margin-right: 10px;
border:none;
border-radius:50%;
color:#ffffff;
font-size:20px;
background:${props=>props.background};
:hover{
    scale:1.05;
    transition-duration:300ms;
}
`

export const PageTitle = styled.h2`
margin-bottom:40px;
`
export const Text = styled.p`
margin-bottom:20px;
font-size:20px;
font-weight:600;
`