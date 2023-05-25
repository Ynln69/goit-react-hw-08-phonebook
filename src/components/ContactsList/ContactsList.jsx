import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from './../../images/trash.svg';

import { getLoading, getError, getVisibleContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import { ListOfContact, Items, ItemButton } from './ContactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  return (
    <ListOfContact>
      {isLoading && !error && <b>Loading...</b>}
      {visibleContacts.map(({ id, name, number }) => (
        <Items key={id}>
          {name}: {number}
          <ItemButton type="button" onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </ItemButton>
        </Items>
      ))}
    </ListOfContact>
  );
};

export default ContactsList;
