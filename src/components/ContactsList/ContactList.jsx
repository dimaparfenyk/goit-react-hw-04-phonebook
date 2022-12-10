import { List, ListItem, Name, Number, StyledNavLink } from "./ContactList.styled";

export const ContactsList = ({ users }) => {
    return (
        <List>
            {users.map(({ id, name, number }) =>
                <ListItem
                    key={id}>
                    <StyledNavLink to={id}>
                    <Name>{name}:</Name>
                    <Number>{number}</Number> 
                    </StyledNavLink>  
                </ListItem>)}
        </List>
    );
};