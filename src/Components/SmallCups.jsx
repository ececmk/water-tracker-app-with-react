import React from 'react';
import Cup from './Cup'
import PropTypes from 'prop-types'

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
