import React, {useState} from 'react';
import './App.css';
import BigCup from './Components/BigCup';
import SmallCups from './Components/SmallCups';


function App(props) {

  const [userGoal, setUserGoal] = useState('')
  const [defaultGoal, setDefaultGoal] = useState('8')


    const submitHandler = (e) => {
        e.preventDefault();
        setDefaultGoal(userGoal);
     
       console.log(userGoal)
       
    }

    const goalHandler = (event) => {
      setUserGoal(event.target.value);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
            <label >Your goal:
                <input type="text" value={userGoal} onChange={goalHandler} />
            </label>
            <button type="submit">Submit Your Goal</button>
        </form>
      <BigCup />
      <SmallCups goal={defaultGoal} />
    </div>
  )

}
export default App;
