import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/Filter/Filter';
import Form from 'components/PhoneForm/PhoneForm';

const Phonebook = () => {
  return (
    <section>
      <Form />
      <FilterContacts />
      <ContactsList />
    </section>
  );
};

export default Phonebook;
