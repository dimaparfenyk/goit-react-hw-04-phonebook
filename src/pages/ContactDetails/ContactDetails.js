import { useParams } from "react-router-dom";
import { Container, TextWrapper, Text, StyledLink } from "./ContactDetails.styled";

export const ContactDetails = ({ contacts }) => {
    const { contactId } = useParams();

    const selectedContact = contacts.filter(({id}) => {
        return id === contactId
    });
   
    return (
        <Container>
            <StyledLink to='/phonebook'>Back</StyledLink>
            {selectedContact.map(({ id, name, number }) => <TextWrapper key={id}>
                <Text>Name: {name}</Text>
                <Text>Number: {number}</Text>
                <Text>Id number: {id}</Text>
            </TextWrapper>
            )}
        </Container>
    );
};