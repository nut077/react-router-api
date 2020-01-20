import React, { useReducer, useEffect } from 'react';
import { StudentForm } from '../components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { numericString } from 'airbnb-prop-types';

const EditStudent = ({
  match: {
    params: { studentId }
  }
}) => {
  const [studentInput, setStudentInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  );
  const editStudent = e => {
    return () => {
      e.preventDefault();
    };
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
    })
  })
};

export default EditStudent;
