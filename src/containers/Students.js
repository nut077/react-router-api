import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const School = ({ match: { params } }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/students/schools/${params[0]}`).then(res => {
      setStudents(res.data);
    });
  }, [params]);

  return (
    <div className="col-5">
      <ul className="nav flex-column">
        {students.map(({ id, firstName, lastName }) => (
          <Link key={id} to={`/students/${id}`} className="nav-link">
            {firstName + ' ' + lastName}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default School;
