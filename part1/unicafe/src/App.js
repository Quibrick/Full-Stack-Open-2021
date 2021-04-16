import React, { useState } from 'react'

const Header = (props) => <h1>{props.name}</h1>

const Button = ({handleClick, text}) => {
  console.log(handleClick)
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({name}) => <p>{name}</p>

const Statistic = (props) => {
  return (
    <p>{props.text} {props.values}</p>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <Statistic text='Good'values={props.values.goodVal}/>
      <Statistic text='Neutral' values={props.values.neutralVal}/>
      <Statistic text='Bad' values={props.values.badVal}/>
      <Statistic text='All' values={props.values.allVal}/>
      <Statistic text='Avg' values={props.values.avgVal}/>
      <Statistic text='Percentage' values={props.values.avgVal}/>
    </div>
  )
}

const Conditional = (props) => {
  if (props.all === 0) {
    return (
      <>
        <Header name='Give Feedback'/>
        <Button handleClick={props.functions.goodFunc} text='good'/>
        <Button handleClick={props.functions.neutralFunc} text='neutral'/>
        <Button handleClick={props.functions.badFunc} text='bad'/>
        <Header name='Statistics'/>
        <Display name='No feedback given'/>
      </>
    )
  } else {
      return (
      <>      
        <Header name='Give Feedback'/>
        <Button handleClick={props.functions.goodFunc} text='good'/>
        <Button handleClick={props.functions.neutralFunc} text='neutral'/>
        <Button handleClick={props.functions.badFunc} text='bad'/>
        <Header name='Statistics'/>
        <Statistics values={props.values}/>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)
  const [avg, setAvg] = useState(0)
  const [goodPerCent, setPerCent] = useState(0)
  const [values, setValues] = useState({
    goodVal : good,
    neutralVal : neutral,
    badVal : bad,
    allVal : all,
    sumVal : sum,
    avgVal : avg,
    goodPerCentVal : goodPerCent,
  })
  
  const goodFeedback = () => {
    setAll(all + 1)
    setGood(good + 1)
    setSum(sum +1)
    if (all === 0) {
      setAvg(avg + 1)
      setPerCent(goodPerCent + 100)
    } else {
      setPerCent((good/all)*100)
      parseFloat(setAvg(sum/all))
    }
    const newValues = {
      ...values,
      goodVal : values.goodVal + 1,
      allVal : values.allVal + 1,
      sumVal : values.sumVal + 1,
      avgVal : (values.sumVal / values.allVal),
      goodPerCentVal : (values.goodVal / values.allVal)
    }
    setValues(newValues)
    console.log(all)
  }
  const neutralFeedback = () => {
    setAll(all +1)
    setNeutral(neutral +1)
    setSum(sum + 0)
    if (all === 0) {
      setAvg(avg + 0)
    } else {
      setPerCent((good/all)*100)
      parseFloat(setAvg(sum/all))
    }
    const newValues = {
      goodVal : good,
      neutralVal : neutral,
      badVal :  bad,
      allVal : all,
      sumVal : sum,
      avgVal :  avg,
      goodPerCentVal : goodPerCent
    }
    setValues(newValues)
  }

  const badFeedback = () => {
    setAll(all +1)
    setBad(bad + 1)
    setSum(sum - 1)
    if (all === 0) {
      setAvg(avg - 1)
      setPerCent(goodPerCent - 100)
    } else {
      setPerCent((good/all)*100)
      parseFloat(setAvg(sum/all))
    }
    const newValues = {
      goodVal : good,
      neutralVal : all,
      badVal : bad,
      allVal : all,
      sumVal : sum,
      avgVal :  avg,
      goodPerCentVal : goodPerCent
    }
    setValues(newValues)
  }

  const functions = {
    goodFunc : goodFeedback,
    neutralFunc : neutralFeedback,
    badFunc : badFeedback 
  }

  return (
    <div>
      <Conditional all={all} functions={functions} values={values}/>
    </div>
  )
}

export default App