import ContactsList from 'components/ContactsList/ContactsList';
import FilterContacts from 'components/Filter/Filter';
import Form from 'components/PhoneForm/PhoneForm';

import { PhonebookSection, FilterContainer } from './Phonebook.styled';

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
