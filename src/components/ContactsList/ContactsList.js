import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onContactDelete }) => {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onContactDelete={onContactDelete}
                />
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired,
        })
    ).isRequired,
    onContactDelete:PropTypes.func.isRequired,
};

export default ContactsList;