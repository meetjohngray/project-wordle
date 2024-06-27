import React from 'react'

function Form({ getGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')
  const handleSubmit = (evt) => {
    evt.preventDefault()
    getGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        name="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(evt) => {
          const nextGuess = evt.target.value.toUpperCase()
          setTentativeGuess(nextGuess)
        }}
        required
        pattern="[a-zA-Z]{5}"
        // for better validation messages
        title="5 letter word"
        // the below are redundant currently.
        // the 2 lines above prevent a weird quirk with minLength
        // that might be fixed sometime in the future
        minLength={5}
        maxLength={5}
      />
    </form>
  )
}

export default Form
