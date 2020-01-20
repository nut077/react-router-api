import React from 'react';
import { StudentForm } from '../components';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Auth } from '../lib';
import { numericString } from 'airbnb-prop-types';

const NewStudent = ({
  match: {
    params: { schoolId }
  },
  history: { push }
}) => {
  const createStudent = ({ studentInput: { firstName, lastName, age } }) => {
    Axios.post(
      '/students',
      {
        schoolId,
        firstName,
        lastName,
        age
      },
      {
        headers: {
          Authorization: Auth.getToken()
        }
      }
    )
      .then(({ data: { data: { schoolId, id: studentId } } }) =>
        push(`/schools/${schoolId}/students/${studentId}`)
      )
      .catch(function(err) {
        console.log(err);
        if (err.response.status === 401) {
          alert('คุณไม่มีสิทธิ์ในการสร้างรายชื่อนักเรียน');
        }
      });
  };
  return <StudentForm formType="Create" onSubmit={createStudent} />;
};

NewStudent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      schoolId: numericString().isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default NewStudent;
