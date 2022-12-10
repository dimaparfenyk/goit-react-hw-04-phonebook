import styled from "styled-components";

export const Box = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-bottom:60px;
padding:40px;
border-radius: 8px;
border: 2px dashed #00cc71;
`;

export const AddContactForm = styled.form`
display:flex;
flex-direction:column;
margin-bottom:-12px;
`

export const ContactInput = styled.input`
    width: 320px;
    height: 28px;
    margin-bottom:12px;
    border-radius: 8px;
    border: 2px solid #00cc71;
    :hover{
       scale:1.02;
       transition-duration:300ms;
    }
`;

export const Button = styled.button`
margin-top:32px;
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