import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import './BigCup.css'
function BigCup(props) {

  const percentageRef = useRef(null);
  let percentageNumber = props.currentValue / props.goal * 100;
  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)

  useEffect(() =>  {
    percentageRef.current.style.transform = `translate(0,${100 - Math.round(percentageNumber)}%`
  }, [props.currentValue, props.goal, percentageNumber])

  return (
    <div className='big-cup-wrapper'>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{display: 'none'}}>
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
      <div className='lid'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='cup'>
        <div ref={percentageRef} className="percentage">
          <div className='percentage-text'>
            {percentage}%
          </div>
          <div className="water" id="water">
            <svg className="water__wave water__wave_back" viewBox="0 0 560 20">
              <use xlinkHref="#wave"></use>
            </svg>
            <svg className="water__wave water__wave_front" viewBox="0 0 560 20">
              <use xlinkHref="#wave"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

BigCup.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default BigCup;
