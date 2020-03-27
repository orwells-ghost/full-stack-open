import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Statistic = ({stat, statValue}) => (
	<p>{stat} {statValue}</p>
)

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const all = bad + neutral + good
	const average = (good - bad) / (all)
	const positive = ((good / all) * 100).toString() + ' %'

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button text={'good'} handleClick={() => setGood(good + 1)} />
			<Button text={'neutral'} handleClick={() => setNeutral(neutral + 1)} />
			<Button text={'bad'} handleClick={() => setBad(bad + 1)} />
			<h1>Statistics</h1>
			<Statistic stat={'good'} statValue={good} />
			<Statistic stat={'neutral'} statValue={neutral} />
			<Statistic stat={'bad'} statValue={bad} />
			<Statistic stat={'all'} statValue={all} />
			<Statistic stat={'average'} statValue={average} />
			<Statistic stat={'positive'} statValue={positive} />
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)