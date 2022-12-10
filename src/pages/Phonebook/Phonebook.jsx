import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ContactsList } from "components/ContactsList/ContactList"
import { Container } from "components/SearchBox/SearchBox.styled"
import { Title } from "./Phonebook.styled"
import { SearchBox } from "components/SearchBox/SearchBox";
import { ContactForm } from "components/ContactForm/ContactForm";

export const PhonebookPage = ({ contacts }) => {
    const [contactItems, setContactItems] = useState(contacts);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('name') ?? '';
    
    //  const [filter, setFilter] = useState('');
    // const changeFilter = e => setFilter(e.target.value);
    console.log(setContactItems);
    const changeFilter = e => {
        const value = e.target.value;
        setSearchParams(value !== '' ? ({ name: value }) : {});
    };
    
    const fileredContactList = () => contactItems.filter(contact =>
        contact.name.toLowerCase().includes(filterParam.toLowerCase()));
   
    const visibleContacts = fileredContactList();

    return (
        <main>
            <Container>
                <Title>Phonebook Page</Title>
                <ContactForm/>
                {contactItems.length > 0 &&
                    <ContactsList users={visibleContacts} />}
                <SearchBox
                    value={filterParam}
                    onChange={changeFilter} />
            </Container>
        </main>
    );
};