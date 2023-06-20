import { PhonebookSection, FilterContainer } from './Phonebook.styled';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/Filter/Filter';
import Form from 'components/PhoneForm/PhoneForm';

const Phonebook = () => {
  return (
    <PhonebookSection>
      <Form />
      <FilterContainer>
        <FilterContacts />
        <ContactsList />
      </FilterContainer>
    </PhonebookSection>
  );
};

export default Phonebook;
