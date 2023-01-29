import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
function BigCup(props) {

  const percentageRef = useRef(null);
  const remainedRef = useRef(null);
  const literRef = useRef(null);
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

  useEffect(() => {
    if(props.currentValue === props.goal){
      remainedRef.current.style.visibility = 'hidden'
      remainedRef.current.style.height = 0
    }else {
      remainedRef.current.style.visibility = 'visible'
      literRef.current.innerText = `${250 * props.goal/1000 - (250 * props.currentValue / 1000)}L`
    }
  }, [props.currentValue, props.goal, percentageNumber])

  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)
  
  let message = ''

  if(percentage> 0 && percentage <= 15){
    message = 'A fresh start!'
  }
  if(percentage > 15 && percentage < 50 ){
    message = 'Remember your goal!'
  }
  if(percentage === 50) {
    message = 'Half way there!'
  }
  if(percentage > 50 && percentage <= 99) {
    message='Dont quit now!'
  }
  if(percentage === 100) {
    message= "That's all! Hurray!"
  }

  return (
    <div className='big-cup-wrapper'>
      <div className='message'>{message}</div>
      <div className="remained" ref={remainedRef}>
        <span ref={literRef}></span>
        <small>Remained</small>
      </div>
      <div className='cup'>
        <div ref={percentageRef} className="percentage">{percentage}%</div>
      </div>
    </div>
  )
}

BigCup.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default BigCup;
