import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onContactDelete }) => {
    return (
        <li className={s.item}>
            <p>{name}: {number}</p>
            <button
                className={s.button}
                type='button'
                onClick={() => onContactDelete(id)}
            >Delete</button>
        </li>
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onContactDelete: PropTypes.func.isRequired,
};

export default ContactsItem;