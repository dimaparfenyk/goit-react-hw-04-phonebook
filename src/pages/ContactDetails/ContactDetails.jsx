
import { useParams } from "react-router-dom";
import { Container, TextWrapper, Text } from "./ContactDetails.styled";

export const ContactDetails = ({ contacts }) => {
    const { contactId } = useParams();

    const selectedContact = contacts.filter(contact => {
        return contact.id === contactId
    });
   
    return (
        <Container>
            
            {selectedContact.map(({ id, name, number }) =>
                <TextWrapper key={id}>
                    <Text>Name: {name}</Text>
                    <Text>Number: {number}</Text>
                    <Text>Id number: {id}</Text>
                </TextWrapper>
            )}
        </Container>);
};