import React from 'react';
import { AuthForm } from '../components';

const SigninContainer = () => {
  const onSubmit = data => {
    console.log(data);
  };
  return <AuthForm formName="Signin" onSubmit={onSubmit} />;
};

export default SigninContainer;
