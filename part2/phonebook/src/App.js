import React, {useState} from 'react'

const Person = ({ person }) => {
    return (
        <p>{person.name}</p>
    )
}

const App = () => {
    const [persons,setPersons] = useState([
        {
            name: 'Arto Hellas'
        }
    ])
	const [newName, setNewName] = useState('')
	
	const handleInputChange = (event) => {
		setNewName(event.target.value)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		setNewName('')
		setPersons(persons.concat({ name: newName }))
	}

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    Name:
                    <input value={newName} onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
			</form>
			
			<h2>Numbers</h2>
			{persons.map(person =>
				<Person key={person.name} person={person} />
			)}
        </div>
    )
}

export default App