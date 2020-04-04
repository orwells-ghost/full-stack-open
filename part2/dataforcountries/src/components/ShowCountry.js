import React from 'react'

const ShowCountry = ({ name, showCountryBtnHanlder}) => {
    return (
        <div>
            <p>{name}</p>
            <button onClick={showCountryBtnHanlder}>Show</button>
        </div>
    )
}

export default ShowCountry