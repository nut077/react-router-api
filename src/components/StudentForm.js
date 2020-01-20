import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Student } from '../containers';
import { Prompt, useHistory } from 'react-router-dom';

const StudentForm = ({ formType, onSubmit, studentInputFromDb }) => {
  const history = useHistory();
  const [studentInput, setStudentInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      age: 0,
      isDirty: false
    }
  );

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setStudentInput({ [name]: value, isDirty: true });
  };

  const submitForm = e => {
    e.preventDefault();
    setStudentInput({ isDirty: false });
    onSubmit({ studentInput });
  };

  useEffect(() => {
    setStudentInput({ ...studentInputFromDb });
  }, [studentInputFromDb]);

  const backToPrevious = history => {
    return () => {
      history.goBack();
    };
  };

  return (
    <form>
      <Prompt
        when={studentInput.isDirty}
        message="Are you sure you want to leave this page?"
      />
      <h2 className="text-center">{formType} Student Form</h2>
      <hr />
      <div className="form-group">
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="Enter firstName"
          value={studentInput.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-control"
          placeholder="Enter lastName"
          value={studentInput.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          className="form-control"
          placeholder="Enter age"
          value={studentInput.age}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={backToPrevious(history)}
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

Student.prpTypes = {
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  studentInput: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  })
};

export default StudentForm;
