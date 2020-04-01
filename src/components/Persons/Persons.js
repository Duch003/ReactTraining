import React, {Component} from 'react';
import Person from './../Person/Person'
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary'

class Persons extends Component {

    shouldComponentUpdate(prevProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return prevProps.persons !== this.props.person
    }
    render(){
        return this.props.persons.map((person, index) => {
            return (
                <ErrorBoundary key={person.id}>
                    <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}/>
                </ErrorBoundary>
            )
        });
    }
}

export default Persons;