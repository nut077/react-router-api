import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { numericString } from 'airbnb-prop-types';
import { Link } from 'react-router-dom';
import { Auth } from '../lib';

const Student = ({
  match: {
    params: { schoolId, studentId }
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
          className="btn btn-danger btn-sm"
          onClick={backPrevious}
        >
          Back
        </button>
        {Auth.getToken() && (
          <span>
            &nbsp;
            <Link
              to={`/schools/${schoolId}/students/${studentId}/edit`}
              className="btn btn-secondary btn-sm"
            >
              Edit
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

Student.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      schoolId: numericString().isRequired,
      studentId: numericString().isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default Student;
