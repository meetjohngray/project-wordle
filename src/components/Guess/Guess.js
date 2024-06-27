import React from 'react'
import { fillRangeWithString } from '../../utils'


function Guess({guess}) {

  const guessArray = guess ? fillRangeWithString(5, guess) : Array(5).fill('');

  return (
    <p className="guess">
        {guessArray.map((item, i) => {
          return <span className="cell" key={i}>{item}</span>    
        })
      }
    </p>
  )
}

export default Guess;
