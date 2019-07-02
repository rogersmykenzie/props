import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student.jsx';
import AddStudents from './components/AddStudents.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: ["John", "Michael", "Brian", "Ismail", "Philip"]
    }
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(name) {
    this.setState({students: [...this.state.students, name]})
  }

  render() {
    let students = this.state.students.map(student => {
      return <Student name={student} />
    })

    return (
      <div className="App">
        {students}
        <AddStudents addStudent={this.addStudent} />
      </div>
    );
  }
}

export default App;
