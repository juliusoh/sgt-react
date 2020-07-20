import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='col-4 text-center'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'><i className='fas fa-user-alt fa-fw'></i></div>
          </div>
          <input
            className='form-control'
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder='Name' />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'><i className='fas fa-book fa-fw'></i></div>
          </div>
          <input
            className='form-control'
            name='course'
            type='text'
            value={this.state.course}
            onChange={this.handleInputChange}
            placeholder='Course' />
        </div>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <div className='input-group-text'><i className='fas fa-graduation-cap fa-fw'></i></div>
          </div>
          <input
            className='form-control'
            name='grade'
            type='text'
            value={this.state.grade}
            onChange={this.handleInputChange}
            placeholder='Grade' />
        </div>
        <button className='btn btn-success m-2 btn-md'>Add</button>
        <button className='btn btn-danger m-2 btn-md' onClick={this.clearInput}>Cancel</button>
      </form>
    );
  }

}
