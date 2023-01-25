import React, {useState} from 'react';
import PropTypes from 'prop-types'

function BigCup(props) {
  let percentage = parseInt(props.currentValue / props.goal * 100 || 0, 10)
  let remained= parseInt(props.goal / 4 - (250 * props.currentValue / 1000) || 0, 10)
  /*const liters = document.getElementById('liters')
  const percentage = document.getElementById('percentage')
  const remained = document.getElementById('remained')

  function updateBigCup(){
    if(props.currentValue === 0){
      percentage.style.visibility ='hidden'
      percentage.style.height = 0
    }else {
      percentage.style.visibility = 'visible'
      percentage.style.height = `${props.currentValue/ props.goal * 330}px`
      percentage.innerText = `${props.currentValue / props.goal * 100}%`
    }
    if(props.currentValue === props.goal){
      remained.style.visibility = 'hidden'
      remained.style.height = 0
    }else {
      remained.style.visibility = 'visible'
      liters.innerText = `${props.goal / 4 - (250 * props.currentValue / 1000)}L`
    }
  }*/

  return (
    <div className={`cup ${props.currentValue === 0 ? 'visible' : '' ||  props.currentValue === props.goal ? 'hidden!' : ''}`}>
      <div className="percentage">{percentage}%</div>
      <div className="remained" id="remained">
        <span>{remained}L</span>
        <small>Remained</small>
      </div>
    </div>
  )
}

BigCup.propTypes = {
  goal: PropTypes.number,
  currentValue: PropTypes.number
}

export default BigCup;
