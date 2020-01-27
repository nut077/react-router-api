import React from 'react';
import { SchoolForm } from '../components';
import { Auth } from '../lib';
import Axios from 'axios';
import PropTypes from 'prop-types';

const NewSchool = ({ history: { push } }) => {
  const onSubmit = ({ name, address }) => {
    Axios.post(
      '/schools',
      {
        name,
        address
      },
      {
        headers: {
          Authorization: Auth.getToken()
        }
      }
    )
      .then(() => {
        push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <SchoolForm formType="Create" onSubmit={onSubmit} />
    </div>
  );
};

NewSchool.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default NewSchool;
