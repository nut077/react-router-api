import React, { useReducer, useEffect } from 'react';
import { StudentForm } from '../components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { numericString } from 'airbnb-prop-types';
import Axios from 'axios';
import { Auth } from '../lib';

const EditStudent = ({
  match: {
    params: { studentId }
  },
  history: { push }
}) => {
  const [studentInput, setStudentInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  );
  const editStudent = req => {
    Axios.patch(
      `/students/${req.id}`,
      {
        ...req
      },
      {
        headers: {
          Authorization: Auth.getToken()
        }
      }
    )
      .then(() => {
        push(`/schools/${req.schoolId}/students/${req.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/students/${studentId}`)
      .then(function({ data: { data } }) {
        setStudentInput({ ...data });
      })
      .catch(function(err) {
        console.log(err);
      });
  }, [studentId]);

  return (
    <StudentForm
      studentInputFromDb={studentInput}
      formType="Edit"
      onSubmit={editStudent}
    />
  );
};

EditStudent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      studentId: numericString().isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default EditStudent;
