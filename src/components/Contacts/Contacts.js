import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onContactDelete }) => {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={s.item} key={id}>
                    <p>{name}: {number}</p>
                    <button
                        className={s.button}
                        type='button'
                        onClick={() => onContactDelete(id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onContactDelete:PropTypes.func.isRequired,
};

export default Contacts;