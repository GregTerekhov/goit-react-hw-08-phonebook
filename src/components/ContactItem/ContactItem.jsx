import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import {
  ContactsWrapper,
  ContactData,
  DeleteButton,
  EditInput,
  EditActionBtn,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const { deleteContact, patchContact } = useContacts();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleNameChange = e => {
    setEditedName(e.target.value);
  };

  const handleNumberChange = e => {
    setEditedNumber(e.target.value);
  };

  const handleSaveContact = () => {
    const updatedContact = {
      id,
      name: editedName,
      number: editedNumber,
    };
    patchContact(updatedContact)
      .then(() => {
        setIsEditing(false);
      })
      .catch(error => console.error('Error updating contact:', error.message));
  };

  const handleCancelEdit = () => {
    setEditedName(name);
    setEditedNumber(number);
    setIsEditing(false);
  };

  const renderEditMode = () => {
    return (
      <>
        <EditInput type="text" value={editedName} onChange={handleNameChange} />
        <EditInput
          type="text"
          value={editedNumber}
          onChange={handleNumberChange}
        />
        <EditActionBtn type="button" onClick={handleSaveContact}>
          Save
        </EditActionBtn>
        <EditActionBtn type="button" onClick={handleCancelEdit}>
          Cancel
        </EditActionBtn>
      </>
    );
  };

  const renderViewMode = () => {
    return (
      <>
        <ContactsWrapper>
          <ContactData onClick={() => setIsEditing(true)}>
            {editedName}
          </ContactData>
          <ContactData onClick={() => setIsEditing(true)}>
            {editedNumber}
          </ContactData>
        </ContactsWrapper>
        <DeleteButton type="button" onClick={() => deleteContact(id)}>
          Delete contact
        </DeleteButton>
      </>
    );
  };
  return <>{isEditing ? renderEditMode() : renderViewMode()}</>;
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
