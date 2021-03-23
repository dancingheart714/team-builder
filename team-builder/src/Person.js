import React from 'react'

const Person = (props) => {
    return(
        <div>
            {props.item.map((person) => {
                return (
                <div>
                <h2>Name: {person.name}</h2>
                <h2>Email: {person.email}</h2>
                <h2>Role: {person.role}</h2>
                </div>
                )
            })}
        </div>
    )
}

export default Person
