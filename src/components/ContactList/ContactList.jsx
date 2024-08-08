import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts }) => {
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};

export default ContactList;
