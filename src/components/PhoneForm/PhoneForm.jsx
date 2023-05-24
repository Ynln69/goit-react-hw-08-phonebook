import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  PhoneForm,
  FormLabel,
  FormInput,
  FormButton,
  FormBox,
  FormTitle,
} from './PhoneForm.styled';
import { getContacts } from 'redux/selectors';

const Form = () => {
  const [name, setName] = useState('');

  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const handelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const contacts = useSelector(getContacts);
  const handelSubmit = e => {
    e.preventDefault();
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    const data = { name, phone };
    dispatch(addContact(data));
    toast.success(`Contact ${name} added successfully`);

    setName('');
    setPhone('');
  };

  return (
    <FormBox>
      <FormTitle>Phonebook</FormTitle>
      <PhoneForm onSubmit={handelSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handelChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handelChange}
          />
        </FormLabel>
        <FormButton type="submit">Add Contact</FormButton>
      </PhoneForm>
    </FormBox>
  );
};

export default Form;
