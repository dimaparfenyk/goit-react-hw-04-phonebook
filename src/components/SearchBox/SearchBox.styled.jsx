import styled from "styled-components";

export const SearchInput = styled.input`
    width: 320px;
    height: 28px;
    margin: 0 auto;
    border-radius: 8px;
    border: 2px solid #00cc71;
    :hover{
       scale:1.02;
       transition-duration:300ms;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 40px 15px 20px 15px;
`;