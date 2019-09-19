import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const School = ({ match: { params }, location: { search } }) => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState({});
  const id = params[0];
  useEffect(() => {
    const pageNo = new URLSearchParams(search).get('page');
    axios.get(`/schools/${id}?page=${pageNo || 1}`).then(res => {
      setStudents(res.data.list);
      setPage(res.data.page);
    });
  }, [id, search]);

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
          {Array.from(page).map((_, i) => {
            const currentIndex = i + 1;
            return (
              <li
                key={currentIndex}
                className={classNames([
                  'page-item',
                  { active: currentIndex === Number(page.page + 1) }
                ])}
              >
                <Link
                  to={`/schools/${id}?page=${currentIndex}`}
                  className="page-link"
                >
                  {currentIndex}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default School;
