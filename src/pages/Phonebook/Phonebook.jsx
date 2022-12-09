import { useState } from "react";
import { ContactsList } from "components/ContactsList/ContactList"
import { Container } from "components/SearchBox/SearchBar.styled"
import { Title } from "./Phonebook.styled"
import { SearchBox } from "components/SearchBox/SearchBox";
import { useSearchParams } from "react-router-dom";

export const PhonebookPage = ({contacts}) => {
    const [contactItems, setContactItems] = useState(contacts);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('name') ?? '';
    
    //  const [filter, setFilter] = useState('');
    // const changeFilter = e => setFilter(e.target.value);

    const changeFilter = e => {
        const value = e.target.value;
        setSearchParams(value !== '' ? ({ name: value }) : {});
    };
    
    const fileredContactList =  () => contactItems.filter(contact =>
        contact.name.toLowerCase().includes(filterParam.toLowerCase()));
   
    const visibleContacts = fileredContactList();

    return (
        <main>
            <Container>
                <Title>Phonebook Page</Title>
                <SearchBox
                    value={filterParam}
                    onChange={changeFilter} />
                {contactItems.length > 0 &&
                    <ContactsList users={visibleContacts} />}
            </Container> 
        </main>
    )
}