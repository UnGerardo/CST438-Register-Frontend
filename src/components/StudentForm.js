import React, { Component } from 'react';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
      studentEmail: '',
      studentStatus: 0,
    };
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  addStudent = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div class="flex-col-cent">
        <h1>Add New Student</h1>
        <label class="m-v-10">Student Name:</label>
        <input
          type="text"
          name="studentName"
          onChange={this.handleChange}
        />

        <label class="m-v-10">Student Email:</label>
        <input
          type="email"
          name="studentEmail"
          onChange={this.handleChange}
        />

        <input class="m-v-10" type="submit" onClick={this.addStudent} value="Add Student" />
      </div>
    );
  }
}

export default StudentForm;