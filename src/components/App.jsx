import { ContactDetails } from "pages/ContactDetails/ContactDetails";
import { FilterPage } from "pages/Filter/Filter";
import { PhonebookPage } from "pages/Phonebook/Phonebook";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";


export const App = () => {
  const contacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='phonebook' element={<PhonebookPage contacts={contacts} />} />
          <Route path='phonebook/:contactId' element={ <ContactDetails contacts={contacts}/>} />
          <Route path='filter' element={<FilterPage />} />
        </Route>
      </Routes>
      <GlobalStyle/>
    </>
  );
};
