import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/Filter/Filter';
import { PhoneForm } from 'components/PhoneForm/PhoneForm.styled';

const Phonebook = () => {
  return (
    <>
      <PhoneForm />
      <FilterContacts />
      <ContactsList />
    </>
  );
};

export default Phonebook;
