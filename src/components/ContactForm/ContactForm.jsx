import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';

const ContactForm = ({ filterValue, handleFilter }) => {
  const { form, label, title, input, btn } = css;
  return (
    <form className={form}>
      <label className={label}>
        <span className={title}>Name</span>
        <input className={input} type="text" name="contactName" />
      </label>
      <label className={label}>
        <span className={title}>Number</span>
        <input className={input} type="number" name="contactNumber" />
      </label>

      <button type="submit" className={btn}>
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   handleFilter: PropTypes.func.isRequired,
// };

export default ContactForm;
