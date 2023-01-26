import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'

function BigCup(props) {

  const percentageRef = useRef(null);
  let percentageNumber = props.currentValue / props.goal;

  useEffect(() => {
    if (props.currentValue === 0) {
      percentageRef.current.style.visibility = 'hidden'
      percentageRef.current.style.height = 0
    } else {
      percentageRef.current.style.visibility = 'visible'
      percentageRef.current.style.height = `${Math.round(percentageNumber * 330)}px`
      percentageRef.current.innerText = `${Math.round(percentageNumber * 100)}%`
    }
  }, [props.currentValue, props.goal, percentageNumber])

  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)

  return (
    <div className='cup'>
      <div ref={percentageRef} className="percentage">{percentage}%</div>
    </div>
  )
}

BigCup.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default BigCup;
