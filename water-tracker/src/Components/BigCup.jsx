import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types'

function BigCup(props) {
  
  const percentageRef = useRef(null);

  useEffect(()=>{
    if(props.currentValue === 0){
      percentageRef.current.style.visibility = 'hidden'
      percentageRef.current.style.height = 0
    }else {
      percentageRef.current.style.visibility = 'visible'
      percentageRef.current.style.height = `${props.currentValue/ props.goal * 330}px`
      percentageRef.current.innerText = `${props.currentValue / props.goal * 100}%`
    }
  }, [props.currentValue, props.goal])

  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)
  console.log('percentage', percentage);

  console.log('goal', props.goal)
  console.log('current', props.currentValue)
 
  return (
    <div className={`cup ${props.currentValue === 0 ? 'visible' : '' ||  props.currentValue === props.goal ? 'hidden!' : ''}`}>
      <div ref={percentageRef} className="percentage">{percentage}%</div>
    </div>
  )
}

BigCup.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default BigCup;
