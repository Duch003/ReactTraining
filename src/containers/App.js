import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from './../components/Cockpit/Cockpit'
import Persons from './../components/Persons/Persons'

class App extends Component {
    
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    state = {
        persons: [
            { id: 'a1', name: "Ewelina", age: 17 },
            { id: 'a2', name: "Tomasz", age: 27 },
            { id: 'a3', name: "Artur", age: 34 }
        ],
        color: 'red',
        showPersons: false,
        showCockpit: true
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

    cockpitShowEventHandler = () => {
        const newState = !this.state.showCockpit;
        this.setState({showCockpit: newState});
    }

    render() {
        console.log('[App.js] render');
        let persons = null;
        let cockpit = null;
        if (this.state.showPersons) {
            persons = 
                <Persons 
                    persons={this.state.persons} 
                    clicked = {this.deletePersonHandler} 
                    changed={this.nameChangedHandler}/>
        }

        if(this.state.showCockpit){
            cockpit = <Cockpit title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            clicked={this.togglePersonsHandler} 
            persons={this.state.persons}/>;
        }

        return (
            <div className={classes.App}>
                <button onClick={this.cockpitShowEventHandler}>Remove Cockpit</button>
                {cockpit}
                {persons}
            </div>
        );
    }
}

export default App;
