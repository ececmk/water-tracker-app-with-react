import React, {useRef, useEffect} from "react";
import PropTypes from 'prop-types'
import './Message.css'

function Message(props) {
  const remainedRef = useRef(null);
  const literRef = useRef(null);

  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)

  useEffect(() => {
    if (props.currentValue === props.goal) {
      console.log(props.currentValue)
      remainedRef.current.style.visibility = 'hidden'
      remainedRef.current.style.height = 0
    } else {
      remainedRef.current.style.visibility = 'visible'
      literRef.current.innerText = `${250 * props.goal / 1000 - (250 * props.currentValue / 1000)}L`
    }
  }, [props.currentValue, props.goal])

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
    <div className="message-wrapper">
      <div className='message'>{message}</div>
      <div className="remained" ref={remainedRef}>
        <span ref={literRef}></span>
        <small>Remained</small>
      </div>
    </div>

  )
}

Message.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default Message;