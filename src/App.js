import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}
                        >
                            <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);

        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi! I'm React app!</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Switch</button>
                {persons}
            </div>
        );
    }
}

export default App;
