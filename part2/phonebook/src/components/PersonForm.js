import React from 'react'
import Input from './Input'

const PersonForm = ({ handleFormSubmit, newName, newPhone, handleNameInputChange, handlePhoneInputChange }) => {

    return (
        <form onSubmit={handleFormSubmit}>
            <Input text="Name" value={newName} handlerFunc={handleNameInputChange} />
            <Input text="Phone" value={newPhone} handlerFunc={handlePhoneInputChange} />
            <div><button type="submit">Add</button></div>
        </form>
    )
}

export default PersonForm