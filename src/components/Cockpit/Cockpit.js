import React from 'react';
import AppStyles from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.length <= 2) {
        assignedClasses.push(AppStyles['Red']);

    }
    if (props.length <= 1) {
        assignedClasses.push(AppStyles['Bold']);
    }

    if(props.showPersons){
        btnClass = AppStyles['Red'];;
    }

    return (
        <div className={AppStyles['Cockpit']}>
            <h1>Hi! I'm React app!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Switch</button>
        </div>
        
    );
}

export default cockpit;