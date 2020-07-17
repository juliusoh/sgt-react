import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
