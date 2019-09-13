import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { arrayExpression } from '@babel/types';

const School = ({ match: { params } }) => {
  const [students, setStudents] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const id = params[0];
  useEffect(() => {
    axios.get(`/students/schools/${id}`).then(res => {
      setStudents(res.data);
    });
    axios.get(`/students/schools/${id}/totalPage`).then(res => {
      setTotalPage(res.data);
    });
  }, [id]);

  return (
    <div>
      <ul className="nav flex-column">
        {students.map(({ id, firstName, lastName }) => (
          <Link key={id} to={`/students/id/${id}`} className="nav-link">
            {firstName + ' ' + lastName}
          </Link>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          <li>555</li>
        </ul>
      </nav>
    </div>
  );
};

export default School;
