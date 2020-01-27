import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '../lib';

const Home = () => (
  <div>
    {Auth.getToken() && (
      <Link to={`/schools/add`} className="btn btn-sm btn-secondary">
        Add school
      </Link>
    )}
    <div className="col-5">home</div>
  </div>
);
export default Home;
