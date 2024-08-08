import { useState } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contacts from '../contacts.json';

function App() {
  // control component: input from searchBox
  const [filterValue, setfilterValue] = useState('');
  const handleFilter = event => {
    const value = event.target.value;
    setfilterValue(value);
  };

  // contacts filtration
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList filteredContacts={filteredContacts} />
    </div>
  );
}

export default App;
