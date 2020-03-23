import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<>
		  <h1>{props.course}</h1>
		</>
	)
}

const Content = (props) => {
	return (
		<>
			<Part partName={props.name1} numExcer={props.exer1} />
			<Part partName={props.name2} numExcer={props.exer2} />
			<Part partName={props.name3} numExcer={props.exer3} />
		</>
	)
}

const Part = (props) => {
	return (
		<>
			<p>{props.partName} {props.numExcer}</p>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises: {props.total}</p>
		</>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<div>
			<Header course={course} />
			<Content name1={part1.name} exer1={part1.exercises} name2={part2.name} exer2={part2.exercises} name3={part3.name} exer3={part3.exercises} />
			<Total total={part1.exercises + part2.exercises + part3.exercises} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))