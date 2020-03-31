import React, {useState} from 'react'

const Person = ({ person }) => {
    return (
        <p>{person.name} {person.phone}</p>
    )
}

const App = () => {
    const [persons,setPersons] = useState([
        {
            name: 'Arto Hellas',
            phone: '902-100-1122'
        }
    ])
	const [newName, setNewName] = useState('')
	const [newPhone, setNewPhone] = useState('')
	
	const handleNameInputChange = (event) => {
		setNewName(event.target.value)
    }
    
    const handlePhoneInputChange = (event) => {
		setNewPhone(event.target.value)
	}

	const handleFormSubmit = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} has already been added to the phonebook.`)
        } else {
            setPersons(persons.concat({ name: newName, phone: newPhone }))
        }
		setNewName('')
		setNewPhone('')
	}

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <div>Name:<input value={newName} onChange={handleNameInputChange} /></div>
                <div>Phone:<input value={newPhone} onChange={handlePhoneInputChange} /></div>
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