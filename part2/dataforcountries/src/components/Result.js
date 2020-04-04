import React from 'react'
import Country from './Country'
import ShowCountry from './ShowCountry'

const Result = ({ countriesToShow }) => {
    const countriesToShowLength = Object.keys(countriesToShow).length
    const showCountryBtnHanlder = (event) => {
        console.log(event)
    }

    if (countriesToShowLength > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    else if (countriesToShowLength > 1 && countriesToShowLength <= 10) {
        return (
            <div>
                {countriesToShow.map(country => 
                    <ShowCountry
                        name={country.name}
                        key={country.name}
                        showCountryBtnHanlder={showCountryBtnHanlder}
                    />
                )}
            </div>
        )
    }
    else if (countriesToShowLength === 1) {
        return (
            <Country country={countriesToShow[0]} />
        )
    }
    else {
        return (
            <div>
                <p>An error occured. The length of the array of countries you searched is {countriesToShowLength}</p>
            </div>
        )
    }
}

export default Result