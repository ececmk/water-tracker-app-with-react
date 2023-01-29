import React from 'react';
import PropTypes from 'prop-types'
import Cup from './Cup'
import './SmallCups.css'

function SmallCups({ goal, handleChange }) {
  const cups = [];

  for (let i = 0; i < goal; i++) {
    cups.push(<Cup key={i} change={handleChange} />)
  }

  return (
    <div className="cups">
      {cups}
    </div>
  );
}

SmallCups.propTypes = {
  goal: PropTypes.number,
  handleChange: PropTypes.func
}

export default SmallCups;
