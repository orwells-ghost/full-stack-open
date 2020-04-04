import React from 'react'

const Country = ({ country }) => (
    <div>
        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h4>Languages</h4>
        {country.languages.map(language => 
            <p key={language.name}>{language.name}</p>    
        )}
        <img src={country.flag} alt={country.name} />
    </div>
)

export default Country