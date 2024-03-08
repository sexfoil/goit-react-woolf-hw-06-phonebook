import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, deleteContact } from 'store/slice';

const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.phonebook);

  const addContact = contact => {
    if (hasContact(contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }

    console.log('contact>> ', contact);
    dispatch(createContact(contact));
    return true;
  };

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const hasContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  };

  const getFilteredContacts = () => {
    console.log('filter>>', filter);
    if (!filter.trim()) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const updateFilter = value => {
    console.log('filter value>> ', value);
    // dispatch(updateFilter(value));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        paddingLeft: '24px',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} updateFilter={updateFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};

export default App;
