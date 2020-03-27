import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from './../components/Cockpit/Cockpit'
import Persons from './../components/Persons/Persons'

class App extends Component {
    state = {
        persons: [
            { id: 'a1', name: "Ewelina", age: 17 },
            { id: 'a2', name: "Tomasz", age: 27 },
            { id: 'a3', name: "Artur", age: 34 }
        ],
        color: 'red',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    togglePersonsHandler = () => {
        const newState = !this.state.showPersons;
        this.setState({ showPersons: newState })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(x => x.id === id);

        const newPerson = {
            ...this.state.persons[personIndex]
        };

        newPerson.name = event.target.value;

        const newPersons = [...this.state.persons];
        newPersons[personIndex] = newPerson;
        this.setState({ persons: newPersons });
    }

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = 
                <Persons 
                    persons={this.state.persons} 
                    clicked = {this.deletePersonHandler} 
                    changed={this.nameChangedHandler}/>
            btnClass = classes.Red;
        }

        return (
            <div className={classes.App}>
                <Cockpit length = {persons == null ? 1000 : persons.length}></Cockpit>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Switch</button>
                {persons}
            </div>
        );
    }
}

export default App;
