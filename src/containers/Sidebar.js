import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Sidebar() {
  const [school, setSchool] = useState([]);

  useEffect(() => {
    axios.get('/schools').then(res => {
      setSchool(res.data);
    });
  }, []);

  return (
    <div className="col-5">
      <div className="list-group">
        {school.map(({ id, name }) => (
          <NavLink
            key={id}
            to={`/schools/${id}/students`}
            className="list-group-item list-group-item-action"
            activeClassName="active"
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
