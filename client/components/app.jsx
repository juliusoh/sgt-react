import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);

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
      body: JSON.stringify({ grade })
    }).then(response => {
      return response.json();
    })
      .then(data => {
        const { grades } = this.state;
        const newGrades = [...grades];
        newGrades.push(data);
        this.setState({ grades });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { grades } = this.state;
    return (
      <div className='container'>
        <Header text='Student Grade Table' averageGrade={this.getAverageGrade()} />
        <div className='row'>
          <GradeTable grades={grades} />
        </div>
      </div>
    );
  }
}

export default App;
