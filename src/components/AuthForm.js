import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ formName, onSubmit }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: ''
    }
  );

  const handleChange = e => {
    const name = e.target.name;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit({ userInput });
  };

  return (
    <form>
      <h2 className="text-center">{formName}</h2>
      <hr />
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={userInput.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={userInput.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onSubmitForm}>
        {formName}
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  formName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AuthForm;
