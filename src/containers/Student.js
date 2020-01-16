import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Student = ({
  match: {
    params: { studentId }
  },
  history: { goBack }
}) => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get(`/students/${studentId}`).then(res => {
      setStudent(res.data.data);
    });
  }, [studentId]);

  const { id, firstName, lastName, age } = student;
  const backPrevious = () => {
    goBack();
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={backPrevious}
        >
          Back
        </button>
      </div>
    </div>
  );
};

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      studentId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default Student;
