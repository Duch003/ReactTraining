import React, { useEffect } from 'react';
import AppStyles from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] useEffect cleanup');
        }
    }, []); //Second argument: points all data used in effect. If data change, so useEffect will execute
    //if [props.persons] -> executes only when persons property will differ
    //if [] (empty) -> never rerun
    //if (no argument) -> run every time

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd useEffect cleanup');
        }
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.persons.length <= 2) {
        assignedClasses.push(AppStyles['Red']);

    }
    if (props.persons.length <= 1) {
        assignedClasses.push(AppStyles['Bold']);
    }

    if(props.showPersons){
        btnClass = AppStyles['Red'];;
    }

    return (
        <div className={AppStyles['Cockpit']}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Switch</button>
        </div>
        
    );
}

export default cockpit;