import { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactsFromServer from '../contacts.json';
import { nanoid } from 'nanoid';

function App() {
  // control component: input from searchBox
  // const [filterValue, setfilterValue] = useState('');
  // const handleFilter = event => {
  //   const value = event.target.value;
  //   setfilterValue(value);
  // };

  // contacts filtration
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterValue.toLowerCase())
  // );

  const [contacts, setContacts] = useState(contactsFromServer);
  const onAddContact = newContact => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    setContacts([finalContact, ...contacts]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      {/* <SearchBox filterValue={filterValue} handleFilter={handleFilter} /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
