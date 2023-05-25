import { PhonebookSection } from './Phonebook.styled';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/Filter/Filter';
import Form from 'components/PhoneForm/PhoneForm';

const Phonebook = () => {
  return (
    <PhonebookSection>
      <Form />
      <FilterContacts />
      <ContactsList />
    </PhonebookSection>
  );
};

export default Phonebook;
