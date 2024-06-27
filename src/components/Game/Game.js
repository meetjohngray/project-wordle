import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Form from '../Form'
import Guess from '../Guess'
import GuessList from '../GuessList'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [list, setList] = React.useState([])

  const getGuess = (tentativeGuess) => {
    const nextList = [...list, tentativeGuess]
    setList(nextList)
  }

  return (
    <>
    {/* <Guess /> */}
    <GuessList guessList={list} />
    <Form getGuess={getGuess}/>
    </>
  )
}

export default Game
