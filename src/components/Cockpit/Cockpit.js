import React from 'react';
import AppStyles from './../../containers/App.css'

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.length <= 2) {
        assignedClasses.push(AppStyles.red);

    }
    if (props.length <= 1) {
        assignedClasses.push(AppStyles.bold);
    }

    return (
        <div>
            <h1>Hi! I'm React app!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
        </div>
        
    );
}

export default cockpit;