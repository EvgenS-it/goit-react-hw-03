import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

const FriendListItem = ({ name, number }) => {
  const { infoContainer, icon, text, btn } = css;
  return (
    <>
      <div className={infoContainer}>
        <p className={text}>
          <FaUser className={icon} />
          {name}
        </p>
        <p className={text}>
          <FaPhone className={icon} />
          {number}
        </p>
      </div>
      <button type="button" className={btn}>
        Delete
      </button>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default FriendListItem;
