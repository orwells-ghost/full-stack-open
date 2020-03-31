import React, { useState } from 'react'
import Persons from './components/Persons'
import Input from './components/Input'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons,setPersons] = useState([
        { name: 'Arto Hellas', phone: '902-100-1122' },
        { name: 'Dan Abramov', phone: '902-555-1122' },
        { name: 'Isaac Newtom', phone: '902-123-3213' }
    ])
    
	const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filterVal, setFilterVal] = useState('')
	
	const handleNameInputChange = (event) => {
		setNewName(event.target.value)
    }
    
    const handlePhoneInputChange = (event) => {
		setNewPhone(event.target.value)
    }
    
    const handleFilterInputChange = (event) => {
        setFilterVal(event.target.value)
    }

	const handleFormSubmit = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} has already been added to the phonebook.`)
        } else {
            setPersons(persons.concat({ name: newName, phone: newPhone }))
        }
        clearInputs()
    }
    
    const clearInputs = () => {
		setNewName('')
		setNewPhone('')
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filterVal))

    return (
        <div>
            <h2>Phonebook</h2>
            <Input
                text="Filter Phonebook"
                val={filterVal}
                handlerFunc={handleFilterInputChange}
            />
            <h3>Add New Person</h3>
            <PersonForm
                handleFormSubmit={handleFormSubmit}
                newName={newName}
                newPhone={newPhone}
                handleNameInputChange={handleNameInputChange}
                handlePhoneInputChange={handlePhoneInputChange}
            />
			
			<h3>Phone Numbers</h3>
			<Persons persons={personsToShow} />
        </div>
    )
}

export default App