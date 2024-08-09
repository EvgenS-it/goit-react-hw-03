import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';

const ContactForm = ({ onAddContact }) => {
  const { form, label, title, input, btn } = css;

  // NOT control form data collection without Formik
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const formElements = event.currentTarget.elements;
  //   const name = formElements.contactName.value;
  //   const number = formElements.contactNumber.value;
  //   const contactObject = { name, number };

  //   onAddContact(contactObject);

  //   event.currentTarget.reset();
  // };

  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
    };

    onAddContact(contactObject);

    console.log(values);
    actions.resetForm();
  };

  const INITIAL_VALUES = {
    contactName: '',
    contactNumber: '',
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className={form}>
        <label className={label}>
          <span className={title}>Name</span>
          <Field className={input} type="text" name="contactName" required />
        </label>
        <label className={label}>
          <span className={title}>Number</span>
          <Field className={input} type="tel" name="contactNumber" required />
        </label>

        <button type="submit" className={btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
