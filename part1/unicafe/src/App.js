import React, { useState } from 'react'

const Header = (props) => <h1>{props.name}</h1>

const Button = ({handleClick, text}) => {
  console.log(handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({name, feedbackNum}) => <div>{name} {feedbackNum}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  const goodFeedback = () => {
    setAll(all + 1)
    setGood(good + 1)
    if (all === 0 ) {
      setAvg(avg + 1)
    } else {
      setAvg((avg + 1) / all )
    }
  }

  const neutralFeedback = () => {
    setAll(all +1)
    setNeutral(neutral +1)
    if (all === 0 ) {
      setAvg(avg + 0)
    } else {
      setAvg((avg + 0) / all )
    }
  }

  const badFeedback = () => {
    setAll(all +1)
    setBad(bad + 1)
    if (all === 0 ) {
      setAvg(avg - 1)
    } else {
      setAvg((avg - 1) / all )
    }
  }

  return (
    <div>
      <Header name='Give Feedback'/>
      <Button handleClick={goodFeedback} text='good'/>
      <Button handleClick={neutralFeedback} text='neutral'/>
      <Button handleClick={badFeedback} text='bad'/>
      <Header name='Statistics'/>
      <Display name='Good' feedbackNum={good}/>
      <Display name='Neutral' feedbackNum={neutral}/>
      <Display name='Bad' feedbackNum={bad}/>
      <Display name='All' feedbackNum={all}/>
      <Display name='Avg' feedbackNum={avg}/>
    </div>
  )
}

export default App