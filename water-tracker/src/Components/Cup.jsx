import React, { useState } from "react";
import PropTypes from 'prop-types'

function Cup(props) {
  const [count, setCount] = useState(0);

  function highlightCups() {
    if (count === 0) {
      setCount(1)
      props.change(1)
    } else {
      setCount(0)
      props.change(-1)
    }
  }

  return (
    <div className={`cup cup-small ${count ? 'full' : ''}`} onClick={highlightCups}>
            250 ml{count}
    </div>
  )
}

Cup.propTypes = {
  change: PropTypes.func
}

export default Cup;