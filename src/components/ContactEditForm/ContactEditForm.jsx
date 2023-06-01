import PropTypes from 'prop-types';
import {
  EditActionBtn,
  EditForm,
  EditInput,
  EditLabel,
} from 'components/ContactEditForm/ContactEditForm.styled';
import { useState } from 'react';

export const ContactEditForm = ({ cancel, onSubmit, data }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedNumber, setEditedNumber] = useState(data.number);

  const handleNameChange = e => {
    setEditedName(e.target.value);
  };

  const handleNumberChange = e => {
    setEditedNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name: editedName, number: editedNumber });
  };

  const disabled = editedName === data.name && editedNumber === data.number;

  return (
    <EditForm onSubmit={handleSubmit}>
      <EditLabel htmlFor="name">
        Name:
        <EditInput
          type="text"
          value={editedName}
          name="name"
          onChange={handleNameChange}
        />
      </EditLabel>
      <EditLabel htmlFor="number">
        Number:
        <EditInput
          type="text"
          value={editedNumber}
          name="number"
          onChange={handleNumberChange}
        />
      </EditLabel>
      <EditActionBtn type="submit" disabled={disabled}>
        Save
      </EditActionBtn>
      <EditActionBtn type="button" onClick={cancel}>
        Cancel
      </EditActionBtn>
    </EditForm>
  );
};

ContactEditForm.propTypes = {
  cancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
