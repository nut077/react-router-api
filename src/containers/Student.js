import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Student = ({ match: { params }, history: { goBack } }) => {
  const [student, setStudent] = useState([]);
  const idStudent = params[0];
  useEffect(() => {
    axios.get(`/students/${idStudent}`).then(res => {
      setStudent(res.data);
    });
  }, [idStudent]);

  const { id, firstName, lastName, age, activeStatus } = student;

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
            <th>Active status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{activeStatus}</td>
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

export default Student;
