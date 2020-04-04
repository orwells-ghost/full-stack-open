import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Result from './components/Result'

const App = () => {
	const [countries, setCountries] = useState([
		// {
		// 	name: "Afghanistan",
		// 	capital: "Kabul",
		// 	population: 27657145,
		// 	languages: [
		// 		{
		// 			name: "Pashto"
		// 		},
		// 		{
		// 			name: 'Uzbek'
		// 		}
		// 	],
		// 	flag: "https://restcountries.eu/data/afg.svg"
		// }
	])
	const [inputCountry, setInputCountry] = useState('')

    const hook = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }
	useEffect(hook, [])
	
	const handleInputChange = (event) => {
		setInputCountry(event.target.value)
	}

	const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(inputCountry))

	return (
		<div>
			<h2>Find a country: </h2>
			<input value={inputCountry} onChange={handleInputChange} />
			<Result countriesToShow={countriesToShow} />
		</div>
	)
}

export default App