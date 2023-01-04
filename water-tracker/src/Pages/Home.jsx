import { useState } from 'react';
import BigCup from '../Components/BigCup';
import SmallCups from '../Components/SmallCups'

function Home() {

    function handleClick() {

        const smallCups = document.querySelectorAll('.cup-small')
        smallCups.forEach((cup, idx) => {
          cup.addEventListener('click', () => highlightCups(idx))
        })
    
        function highlightCups(idx) {
          if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
          else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
          }
    
          smallCups.forEach((cup, idx2) => {
            if (idx2 <= idx) {
              cup.classList.add('full')
            } else {
              cup.classList.remove('full')
            }
          })
        }
      }
    
      const smallCups = document.querySelectorAll('.cup-small')
      const liters = document.getElementById('liters')
      const percentage = document.getElementById('percentage')
      const remained = document.getElementById('remained')
    
    
      function updateBigCup() {
        const fullCups = document.querySelectorAll('.cup-small.full').length
        const totalCups = smallCups.length
    
        if (fullCups === 0) {
          percentage.style.visibility = 'hidden'
          percentage.style.height = 0
        } else {
          percentage.style.visibility = 'visible'
          percentage.style.height = `${fullCups / totalCups * 330}px`
          percentage.innerText = `${fullCups / totalCups * 100}%`
        }
    
        if (fullCups === totalCups) {
          remained.style.visibility = 'hidden'
          remained.style.height = 0
        } else {
          remained.style.visibility = 'visible'
          liters.innerText = `${2 - (250 * fullCups / 1000)}L`
        }
      }

    const [goal, setGoal] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Your goal:
                    <input type="text"
                        id="drinking-goal"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)} />
                </label>
                <button type="submit">Submit Your Goal</button>
            </form>

            <BigCup />
            <SmallCups onClick={() => {handleClick(); updateBigCup();}} />

        </div>
    )

}

export default Home;