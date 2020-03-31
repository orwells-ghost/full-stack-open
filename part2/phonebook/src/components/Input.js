import React from 'react'

const Input = ({ text, value, handlerFunc }) => {
    return (
        <div>
            { text }: <input value={value} onChange={handlerFunc} />
        </div>
    )
}

export default Input