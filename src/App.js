import React, { Component } from "react";
import { nanoid } from "nanoid";
import initialContacts from './Contacts.json';
import Section from "components/Section";
import Form from "components/Form";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";

class App extends Component{
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    };
  };
  
  componentDidUpdate(prevState, prevProps) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    };
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.some(contact =>
      contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
  };

  onContactDelete = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter),
    );
  };

  render() {  
    const { filter } = this.state;
    const { addContact, onContactDelete, changeFilter, getVisibleContacts } = this;
    const visibleContacts = getVisibleContacts();
    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={ addContact }/>     
        </Section>
        <Section title={"Contacts"}>
          <Filter
            value={filter}
            onChange={changeFilter}
          />
          <ContactsList
            contacts={visibleContacts}
            onContactDelete={onContactDelete}
          />     
        </Section>
      </>
    );
  };
};

export default App;