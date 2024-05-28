import { useState } from 'react'
import './App.css'
import dumbell from './images/dumbell.png'
import easy from './images/easy.png'
import fitnesstracker from './images/fitness-tracker.png'
import healthyfood from './images/healthy-food.png'
import workout from './images/workout.png'
import blank1 from './images/blank1.png'

const WIDTH = 8;
const candyColors = [
  dumbell ,
  easy,
  fitnesstracker,
  healthyfood,
  workout,
  blank1

]
function App() {
  const[candies , setCandies] = useState([])

  console.log(candies);
const createBoard = () => {
  const randomCandies = [];
  for (let i = 0; i < WIDTH*WIDTH; i++) {
    const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
    randomCandies.push({color:randomColor})

  }
  setCandies(randomCandies)
 
}
useEffect(() => {
  createBoard()
} , [])

  return (
    <>
      <div className="App">
        <div className="game">
          {candies.map((candie , index )=> (
            <div
             key = {index}
            className='img-container'>
              <img src={candie.color}
              alt={candie.color}/>
            </div>
          ))}
        </div>
      </div>
     
    </>
  )
}

export default App
