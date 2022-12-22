import styled from "styled-components";

export const SignUpInput = styled.input`
    width: 320px;
    height: 28px;
    margin-bottom:16px;
    border-radius: 8px;
    border: 2px solid #00cc71;
    :hover{
       scale:1.02;
       transition-duration:300ms;
    }
`;

export const SubmitForm = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:480px;
margin:0 auto;
padding:40px;
border-radius: 8px;
border: 2px dashed #00cc71;
`;

export const Box = styled.div`
display:flex;
padding:0 15px;
`

export const SubmitButton = styled.button`
display:flex;
  align-items:center;
  justify-content:center;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  text-transform: uppercase;
  width:80px;
  height: 30px;
  color: ${p => p.theme.colors.white};
  background-color: #07c;
  border:none;
  border-radius: 8px;
  :hover{
    color: ${p => p.theme.colors.primary};
  }
`