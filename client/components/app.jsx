import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

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

  render() {
    const { grades } = this.state;
    return (
      <div className='container'>
        <Header text='Student Grade Table' />
        <div className='row'>
          <GradeTable grades={grades} />
        </div>
      </div>
    );
  }
}

export default App;
