import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Auth } from '../lib';
import { numericString } from 'airbnb-prop-types';

const Students = ({
  match: {
    params: { schoolId }
  },
  location: { search }
}) => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState({});
  useEffect(() => {
    const pageNo = new URLSearchParams(search).get('page');
    axios.get(`/schools/${schoolId}/students?page=${pageNo || 1}`).then(res => {
      if (typeof res.data.data.list !== 'undefined') {
        setStudents(res.data.data.list);
      } else {
        setStudents([]);
      }
      setPage(res.data.data.page);
    });
  }, [schoolId, search]);

  return (
    <div>
      {Auth.getToken() && (
        <Link
          to={`/schools/${schoolId}/students/new`}
          className="btn btn-sm btn-secondary"
        >
          Create Student
        </Link>
      )}
      <ul className="nav flex-column">
        {students.map(({ id, firstName, lastName }) => (
          <Link
            key={id}
            to={`/schools/${schoolId}/students/${id}`}
            className="nav-link"
          >
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
                  to={`/schools/${schoolId}/students?page=${currentIndex}`}
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

Students.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      schoolId: numericString().isRequired
    }).isRequired
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
};

export default Students;
