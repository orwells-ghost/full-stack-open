import React from 'react'

const Header = ({ name }) => {
	return (
		<>
		  <h1>{name}</h1>
		</>
	)
}

const Content = ({ parts }) => {
	return (
        <>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
		</>
	)
}

const Part = ({ part }) => {
	return (
			<p>{part.name} {part.exercises}</p>
	)
}

const Total = ({ parts }) => {
    const total = parts.map(part => part.exercises).reduce( (a, b) => a + b)

    return (
        <p>Total of {total} exercises</p>
    )
}

const Course = ({ course }) => {
    return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

export default Course