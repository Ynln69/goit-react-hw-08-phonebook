import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from './../../images/trash.svg';
import { ReactComponent as EditIcon } from './../../images/pencil2.svg';
import { ReactComponent as SaveIcon } from './../../images/save.svg';

import { getLoading, getVisibleContacts } from 'redux/selectors';
import { deleteContact, fetchContacts, editContact } from 'redux/operations';

import {
  ListOfContact,
  Items,
  DeleteButton,
  EditBtn,
} from './contactsList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const [editingContact, setEditingContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = contactId => {
    const confirmation = window.confirm('Are you want to delete this contact?');
    if (confirmation) {
      dispatch(deleteContact(contactId));
      toast.error('One contact has been deleted');
    }
  };

  const handleEdit = contact => {
    setEditingContact(contact);
    setIsEditing(true);
  };

  const handleSave = editedContact => {
    dispatch(editContact(editedContact));
    toast.success(`Contact edit successfully`);
    setIsEditing(false);
  };

  return (
    <ListOfContact>
      {visibleContacts.map(({ id, name, number }) => (
        <Items key={id}>
          {isEditing && editingContact?.id === id ? (
            <>
              <input
                type="text"
                value={editingContact.name}
                onChange={e =>
                  setEditingContact({
                    ...editingContact,
                    name: e.target.value,
                  })
                }
              />
              <input
                type="text"
                value={editingContact.number}
                onChange={e =>
                  setEditingContact({
                    ...editingContact,
                    number: e.target.value,
                  })
                }
              />
            </>
          ) : (
            <>
              {name}: {number}
            </>
          )}
          <div>
            {isEditing && editingContact?.id === id ? (
              <EditBtn onClick={() => handleSave(editingContact)}>
                <SaveIcon />
              </EditBtn>
            ) : (
              <EditBtn onClick={() => handleEdit({ id, name, number })}>
                <EditIcon />
              </EditBtn>
            )}
            <DeleteButton type="button" onClick={() => handleDelete(id)}>
              <DeleteIcon />
            </DeleteButton>
          </div>
        </Items>
      ))}
      {isLoading && visibleContacts.length === 0 && <b>No contacts</b>}
    </ListOfContact>
  );
};

export default ContactsList;
