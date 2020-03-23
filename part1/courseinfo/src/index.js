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
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]
	
	

	return (
		<div>
			<Header course={course} />
			<Content name1={parts[0].name} exer1={parts[0].exercises} name2={parts[1].name} exer2={parts[1].exercises} name3={parts[2].name} exer3={parts[2].exercises} />
			<Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))