import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className='myClass'>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
        </div>
    );
}

export default userOutput;