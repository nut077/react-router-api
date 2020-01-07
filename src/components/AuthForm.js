import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ formName, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
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
          value={email}
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={handlePasswordChange}
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
