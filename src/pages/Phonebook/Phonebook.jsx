import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ContactsList } from "components/ContactsList/ContactList"
import { Container } from "components/SearchBox/SearchBox.styled"
import { Title } from "./Phonebook.styled"
import { SearchBox } from "components/SearchBox/SearchBox";
import { ContactForm } from "components/ContactForm/ContactForm";

export const PhonebookPage = ({ contacts }) => {
    const [contactItems] = useState(contacts);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('name') ?? '';
    
    //  const [filter, setFilter] = useState('');
    // const changeFilter = e => setFilter(e.target.value);
    const changeFilter = e => {
        const value = e.target.value;
        setSearchParams(value !== '' ? ({ name: value }) : {});
    };
    
    const fileredContactList = () => contactItems.filter(contact =>
        contact.name.toLowerCase().includes(filterParam.toLowerCase()));
   
    const visibleContacts = fileredContactList();

    const logger = time => {
        console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
    };

    const timerId = setInterval(logger, 2000, 2000);
    console.log(timerId);
    const shouldCancelTimer = Math.random() > 0.5;
    console.log(shouldCancelTimer);
    if (shouldCancelTimer) {
        clearInterval(timerId)
    }

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