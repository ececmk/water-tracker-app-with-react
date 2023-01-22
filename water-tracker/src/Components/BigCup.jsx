import React, {useState} from 'react';
import PropTypes from 'prop-types'

function BigCup(props) {
  const [percentage, setPercentage] = useState(0)

  return (
    <div className="cup" >
      <div className="remained" id="remained">
        <span id="liters"></span>
        <small>Remained {props.currentValue}</small>
      </div>
      <div className="percentage"></div>
    </div>
  )
}

BigCup.propTypes = {
  currentValue: PropTypes.number
}

export default BigCup;
