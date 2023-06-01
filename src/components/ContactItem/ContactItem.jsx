import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import {
  ContactsWrapper,
  ContactData,
  DeleteButton,
} from './ContactItem.styled';
import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact, patchContact } = useContacts();
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveContact = formData => {
    const updatedContact = {
      id,
      ...formData,
    };
    patchContact(updatedContact)
      .unwrap()
      .then(() => {
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating contact:', error.message));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <ContactEditForm
          cancel={handleCancelEdit}
          onSubmit={handleSaveContact}
          data={{ name, number }}
        />
      ) : (
        <>
          <ContactsWrapper>
            <ContactData onClick={() => setIsEditing(true)}>{name}</ContactData>
            <ContactData onClick={() => setIsEditing(true)}>
              {number}
            </ContactData>
          </ContactsWrapper>
          <DeleteButton type="button" onClick={() => deleteContact(id)}>
            Delete contact
          </DeleteButton>
        </>
      )}
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
