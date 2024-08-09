import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  const { form, label, title, input, btn } = css;

  const handleSubmit = event => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const name = formElements.contactName.value;
    const number = formElements.contactNumber.value;
    const contactObject = { name, number };

    onAddContact(contactObject);

    event.currentTarget.reset();
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label className={label}>
        <span className={title}>Name</span>
        <input className={input} type="text" name="contactName" required />
      </label>
      <label className={label}>
        <span className={title}>Number</span>
        <input className={input} type="tel" name="contactNumber" required />
      </label>

      <button type="submit" className={btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
