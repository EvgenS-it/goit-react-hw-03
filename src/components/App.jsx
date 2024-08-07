// import { useState, useEffect } from 'react';
import './App.css';
// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contacts from '../contacts.json';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
