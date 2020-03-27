import React from 'react';
import styles from './Person.css';

const person = (props) => {
    return ( 
        <div className={styles.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <h3>{props.children}</h3>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;