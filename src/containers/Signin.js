import React from 'react';
import axios from 'axios';
import { Auth } from '../lib';
import PropTypes from 'prop-types';
import { AuthForm } from '../components';

const SigninContainer = ({ history: { goBack } }) => {
  const onSubmit = ({ userInput: { email, password } }) => {
    axios
      .post('/authenticate', {
        username: email,
        password
      })
      .then(function(res) {
        Auth.setToken(res.headers);
      })
      .then(() => goBack())
      .catch(function(err) {
        console.log(err);
        if (err.response.status === 500) {
          alert('รหัสผ่านไม่ถูกต้อง กรุณาใส่รหัสผ่านอีกครั้ง');
        }
      });
  };
  return <AuthForm formName="Signin" onSubmit={onSubmit} />;
};

SigninContainer.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
  userInput: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired
};

export default SigninContainer;
