import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from './../components/Cockpit/Cockpit'
import Persons from './../components/Persons/Persons'

class App extends Component {
    //LIFECYCLE HOOKS
    //[Creating #1] constructor
    // - Set up state (initial at last)
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

    //[Creating #2]                     [Updating #1] getDerivedStateFromProps
    // - cause side-effects              - Sync State to props
    // - keyword static is important
    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    //[Updating #2]
    // - you can cancel updating process
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
    }
    

    //[Creating #4] componentWillMount
    // - unsupported (unsafe)
    componentWillMount() {
        console.log('[App.js] componentWillMount');
    }

    //[Creating #5] componentDidMount
    // - invoked when component is fully rendered/ready
    // - cause side-effects (http etc.)
    // - DON'T USE setState (inf. loop -> rerender)
    componentDidMount() {
        console.log('[App.js] componentDidMount');
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

    //[Updating #4] getSnapshotBeforeUpdate
    // - use for last-minute DOM operations (for example, position of scrollbar)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[App.js] getSnapshotBeforeUpdate');
        return null;
    }

    //[Updating #5] componentDidUpdate
    // - cause side-effects
    // - DON'T UPDATE STATE (inf. loop)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
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

    //[Creating #3] [Updating #3] render
    // - prepare and structure JSX code
    // - renders/updates child components
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
