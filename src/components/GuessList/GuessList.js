import React from 'react'
import Guess from '../Guess'

function GuessList({ guessList }) {

  console.log(guessList)
  return (
    
    <div className="guess-results">
      <Guess />
      {guessList.map((item, i) => {
        // return <p className="guess" key={i}>{item}</p>
          return <Guess guess={item}/>
        })
      }
    </div>
  )
}

export default GuessList
