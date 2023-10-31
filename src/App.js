import React, { useState } from 'react';
import BigCup from './Components/BigCup';
import SmallCups from './Components/SmallCups';
import Message from './Components/Message';

function App() {
  const [userGoal, setUserGoal] = useState(8)
  const [defaultGoal, setDefaultGoal] = useState(8)
  const [currentValue, setCurrentValue] = useState(0)

  const onSubmitUserGoal = (e) => {
    e.preventDefault();
    setDefaultGoal(userGoal);
  }

  const onChangeUserGoal = (event) => {
  setUserGoal(parseInt(event.target.value, 10) || 0);
}

const handleChange = (value) => {
  setCurrentValue(parseInt(currentValue + value, 10) || 0);
}

  return (
    <div className='main-wrapper' >
      <h3 className='title'>How many cups do you want to drink?</h3>
      <form className='form' onSubmit={onSubmitUserGoal}>
        <label className='goal-label' >Your goal:
          <input type="text" value={userGoal} onChange={onChangeUserGoal} />
        </label>
        <button className="btn" type="submit">Submit</button>
      </form>
      <Message goal={defaultGoal} currentValue={currentValue}  />
      <div className='cups-wrapper'>
        <BigCup goal={defaultGoal} currentValue={currentValue} />
        <SmallCups goal={defaultGoal} handleChange={handleChange}  />
      </div>
    </div>
  )

}
export default App;
