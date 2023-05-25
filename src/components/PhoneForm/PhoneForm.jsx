import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import {
  PhoneForm,
  FormLabel,
  FormInput,
  FormButton,
  FormBox,
  FormTitle,
} from './PhoneForm.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handelChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
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

    const data = { name, number };
    dispatch(addContact(data));
    toast.success(`Contact ${name} added successfully`);

    setName('');
    setNumber('');
  };

  return (
    <FormBox>
      <FormTitle>Add your contacts</FormTitle>
      <PhoneForm onSubmit={handelSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handelChange}
          />
        </FormLabel>
        <FormLabel>
          <FormInput
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handelChange}
          />
        </FormLabel>
        <FormButton type="submit">Add Contact</FormButton>
      </PhoneForm>
    </FormBox>
  );
};

export default Form;
