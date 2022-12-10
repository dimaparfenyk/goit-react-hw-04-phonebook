import { AddContactForm, Box, ContactInput, Button } from "./ContactForm.styled";

export const ContactForm = () => {
    return (
        <Box>
            <AddContactForm>
            <ContactInput type="text" 
                name="name"
                placeholder="Name"
            />
            <ContactInput type="text" 
                name="number"
                placeholder="Number"
            />
            </AddContactForm>
           
            <Button>Add contact</Button>
        </Box>
    )
}