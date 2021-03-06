import React, {Component} from 'react';
import PersonStyles from './Person.css';

class Person extends Component {
    render(){
        return ( 
            <div className={PersonStyles['Person']}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old</p>
                <h3>{this.props.children}</h3>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;