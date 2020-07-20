import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.userAddGrade = this.userAddGrade.bind(this);
    this.userDeleteGrade = this.userDeleteGrade.bind(this);
  }

  componentDidMount() {
    this.userViewGrades();
  }

  userViewGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(error => console.error(error));
  }

  getAverageGrade() {
    const { grades } = this.state;
    const sum = grades.reduce((sum, grade) => sum + grade.grade, 0);
    const avg = (sum / grades.length) || 0;
    return avg;
  }

  userAddGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grade)
    }).then(response => {
      return response.json();
    })
      .then(data => {
        const { grades } = this.state;
        const newGrades = [...grades];
        newGrades.push(data);
        this.setState({ grades: newGrades });
      })
      .catch(error => console.error(error));
  }

  userDeleteGrade(id) {
    fetch(`api/grades/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const { grades } = this.state;
        const deletedGrades = grades.filter(grade => grade.id !== id);
        this.setState({ grades: deletedGrades });
      });
  }

  render() {
    const { grades } = this.state;
    return (
      <div className='container'>
        <Header text='Student Grade Table' averageGrade={this.getAverageGrade()} />
        <div className='row'>
          <GradeTable grades={grades} deletedGrade={this.userDeleteGrade}/>
          <GradeForm addNewStudent={this.userAddGrade} />
        </div>
      </div>
    );
  }
}

export default App;
