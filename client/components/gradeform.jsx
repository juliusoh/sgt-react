import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleFieldChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'grade' ? parseInt(target.value) : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewStudent(this.state);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  clearInput(event) {
    event.preventDefault();
    const reset = {
      name: '',
      course: '',
      grade: ''
    };
    this.setState(reset);
  }

}
