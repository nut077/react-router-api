import React, { useReducer } from 'react';
import { useHistory, Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';

const SchoolForm = ({ formType, onSubmit }) => {
  const history = useHistory();
  const backPervious = () => {
    history.goBack();
  };

  const [schoolInput, setSchoolInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      address: '',
      isDirty: false
    }
  );

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setSchoolInput({ [name]: value, isDirty: true });
  };

  const submitForm = e => {
    e.preventDefault();
    setSchoolInput({ isDirty: false });
    onSubmit(schoolInput);
  };

  return (
    <form>
      <Prompt
        when={schoolInput.isDirty}
        message="Are you sure you want to leave this page?"
      />
      <h2 className="text-center">{formType} School Form</h2>
      <hr />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Enter name"
          value={schoolInput.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control"
          placeholder="Enter address"
          value={schoolInput.address}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={backPervious}
      >
        Back
      </button>
      &nbsp;
      <button
        type="submit"
        className="btn btn-primary btn-sm"
        onClick={submitForm}
      >
        {formType}
      </button>
    </form>
  );
};

SchoolForm.propTypes = {
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SchoolForm;
