import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndCondision = () => {
  return (
    <div>
      <h3>Here is our Trams and Condision</h3>
      <p>Go back to Registration: <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default TramsAndCondision;