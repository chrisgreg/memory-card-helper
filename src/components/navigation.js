import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="navigation">
      <Link to="/" activeClassName="active">Picture Calculator</Link>
      <Link to="suggestion" activeClassName="active">Card Calculator</Link>
    </div>
  );
}
