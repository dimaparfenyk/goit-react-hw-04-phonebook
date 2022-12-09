import { NavLink } from "react-router-dom";
import { List, ListItem, Name, Number } from "./ContactList.styled";

export const ContactsList = ({ users }) => {
    return (
        <List>
            {users.map(({ id, name, number }) =>
                <ListItem
                    key={id}>
                    <NavLink to={id}>
                    <Name>{name}:</Name>
                    <Number>{number}</Number> 
                    </NavLink>  
                </ListItem>)}
        </List>
    );
};