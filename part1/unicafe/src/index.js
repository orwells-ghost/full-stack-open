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

const DisplayStatistics = ({good, neutral, bad}) => {
	const all = bad + neutral + good
	const average = (good - bad) / all
	const positive = ((good / all) * 100).toString() + ' %'

	if (all === 0) {
		return (
			<div>No Feedback Given</div>
		)
	} else {
		return (
			<div>
				<Statistic stat={'good'} statValue={good} />
				<Statistic stat={'neutral'} statValue={neutral} />
				<Statistic stat={'bad'} statValue={bad} />
				<Statistic stat={'all'} statValue={all} />
				<Statistic stat={'average'} statValue={average} />
				<Statistic stat={'positive'} statValue={positive} />
			</div>
		)
	}
}

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>Give Feedback</h1>
			<Button text='Good' handleClick={() => setGood(good + 1)} />
			<Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
			<Button text='Bad' handleClick={() => setBad(bad + 1)} />
			<h1>Statistics</h1>
			<DisplayStatistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

ReactDOM.render(<App />, 
	document.getElementById('root')
)