import React from 'react';

function Form() {
    const [ guess, setGuess ] = React.useState('')
    const handleSubmit = (evt) => {
      evt.preventDefault()
      let submittedGuess = guess.toUpperCase()
      console.log(submittedGuess)
      setGuess('')
    }

    return (
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          name='guess-input' 
          type='text'
          value={guess}
          onChange={(evt) => setGuess(evt.target.value)}
          pattern=".{5,5}"
        />
      </form>  
  );
}

export default Form;
