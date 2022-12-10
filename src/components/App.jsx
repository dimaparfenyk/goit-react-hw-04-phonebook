import { PhonebookPage } from "pages/Phonebook/Phonebook";
import { ContactDetails } from "pages/ContactDetails/ContactDetails"; 
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import { Counter } from "pages/Counter/Counter";
import { ColorPicker } from "pages/ColorPicker/ColorPicker";

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

 const contacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

export const App = () => {
 
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='phonebook' element={<PhonebookPage contacts={contacts} />} />
          <Route path='phonebook/:contactId' element={<ContactDetails contacts={contacts} />} />
          <Route path='colorpicker' element={<ColorPicker colors={colorPickerOptions} />} />
          <Route path='counter' element={<Counter />} />
          <Route path='signup' element={<div>SignUp</div>} />
          <Route path='pokemon' element={<div>Pokemon</div>} />
        </Route>
      </Routes>
      <GlobalStyle/>
    </>
  );
};
