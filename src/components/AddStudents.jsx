import React, {Component} from 'react';

class AddStudents extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
        this.handleName = this.handleName.bind(this);
    }

    handleName(value) {
        this.setState({name: value})
    }

    render() {
        return (
            <div>            
                <input onChange={(e) => this.handleName(e.target.value)} />
                <button onClick={() => this.props.addStudent(this.state.name)}>Add Student</button>
            </div>
        )
    }
}

export default AddStudents;