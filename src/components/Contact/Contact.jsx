import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

const FriendListItem = ({ name, number }) => {
  const { infoContainer, text, btn } = css;
  return (
    <>
      <div className={infoContainer}>
        {/* <img className={icon} src={avatar} alt="Avatar" width="88" /> */}
        <p className={text}>
          <FaUser />
          {name}
        </p>
        {/* <img className={icon} src={avatar} alt="Avatar" width="88" /> */}
        <p className={text}>
          <FaPhone />
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
