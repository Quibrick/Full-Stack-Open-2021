import React, { useState } from 'react'

const Title = (props) => <h1>{props.name}</h1>

const Button = (props) => {
  return (
    <button onClick={props.event}>{props.text}</button>
  )
}

const Statistic = (props) => <p>{props.name} {props.value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)
  const [avg, setAvg] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
    setAll(all + 1)
    setSum(sum + 1)
    if (all === 0) {
      setAvg(avg + 1)
    } else {
      setAvg (sum / all)
    }
  }
  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setSum(sum + 0)
    if (all === 0) {
      setAvg(avg + 0)
    } else {
      setAvg (sum / all)
    }
  }
  const badFeedback = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setSum(sum - 1)
    if (all === 0) {
      setAvg(avg - 1)
    } else {
      setAvg (sum / all)
    }
  }

  return (
    <div>
      <Title name='Give Feedback'/>
      <Button event={goodFeedback} text='Good'/>
      <Button event={neutralFeedback} text='Neutral'/>
      <Button event={badFeedback} text='Bad'/>
      <Title name='Statistics'/>
      <Statistic name='Good' value={good}/>
      <Statistic name='Neutral' value={neutral}/>
      <Statistic name='Bad' value={bad}/>
      <Statistic name='All' value={all}/>
      <Statistic name='Avg' value={avg}/>
    </div>
  )
}

export default App