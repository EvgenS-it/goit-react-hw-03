import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ filterValue, handleFilter }) => {
  const { form } = css;
  return (
    <form className={form}>
      <label>MY FORM</label>
    </form>
  );
};

// ContactForm.propTypes = {
//   filterValue: PropTypes.string.isRequired,
//   handleFilter: PropTypes.func.isRequired,
// };

export default ContactForm;
