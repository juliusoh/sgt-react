import React from 'react';

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
    return (
      <div className='container'>
        <header text='Student Grade Table'></header>
      </div>
    );
  }
}

export default App;
