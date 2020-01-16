import React from 'react';
import axios from 'axios';
import { Auth } from '../lib';
import PropTypes from 'prop-types';
import { AuthForm } from '../components';

const SignupContainer = ({ history: { goBack } }) => {
  const onSubmit = ({ userInput: { email, password } }) => {
    axios
      .post('/register', {
        username: email,
        password
      })
      .then(function(res) {
        Auth.setToken(res.headers);
      })
      .then(() => goBack())
      .catch(function(error) {
        console.log(error);
      });
  };

  return <AuthForm formName="Signup" onSubmit={onSubmit} />;
};

SignupContainer.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
  userInput: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired
};

export default SignupContainer;
