import React from 'react';
import Person from './../Person/Person'
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary'

const persons = (props) => 
    props.persons.map((person, index) => {
        return (
            <ErrorBoundary key={person.id}>
                <Person
                name={person.name}
                age={person.age}
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}/>
            </ErrorBoundary>
        )
    });

export default persons;

// import React, {Component} from 'react'
// import ErrorBoundary from './../ErrorBoundary/ErrorBoundary';
// import Person from './../Person/Person';

// class Persons extends Component {

//     constructor(props){
//         super();
//         state = {
//             persons: props.persons
//         }
//     }
    

//     deletePersonHandler = (personIndex) => {
//         const persons = [...this.state.persons];
//         persons.splice(personIndex, 1);
//         this.setState({ persons: persons })
//     }

//     nameChangedHandler = (event, id) => {
//         const personIndex = this.state.persons.findIndex(x => x.id === id);

//         const newPerson = {
//             ...this.state.persons[personIndex]
//         };

//         newPerson.name = event.target.value;

//         const newPersons = [...this.state.persons];
//         newPersons[personIndex] = newPerson;
//         this.setState({ persons: newPersons });
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.persons.map((person, index) => {
//                     return (
//                         <ErrorBoundary key={person.id}>
//                             <Person
//                             name={person.name}
//                             age={person.age}
//                             click={() => this.deletePersonHandler(index)}
//                             changed={(event) => this.nameChangedHandler(event, person.id)}/>
//                         </ErrorBoundary>
//                     )
//                 })}
//             </div>
//         )
//     }
    
// }

// export default Persons;