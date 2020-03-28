import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const App = (props) => {
	const populateStateObj = (anecdotes) => {
		const obj = {}
		for (let i = 0; i < anecdotes.length; i++){
			obj[i] = 0
		}
		return obj
	}

	const [points, setPoints] = useState(populateStateObj(anecdotes))
	const [selected, setSelected] = useState(0)

	const handleAnecdotesClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))
	const handleVoteClick = () => {
		setPoints({
			...points,
			[selected]: points[selected] + 1
		})
	}
	console.log(points)

	return (
		<div>
			{props.anecdotes[selected]}
			<br />
			<Button text="Vote" handleClick={handleVoteClick} />
			<Button text="Next Random Anecdote" handleClick={handleAnecdotesClick} />
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)