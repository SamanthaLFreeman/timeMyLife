import React, { Component } from 'react';
import ActivityForm from '../ActivityForm/ActivityForm';
import PastActivities from '../PastActivities/PastActivities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time My Life</h1>
        </header>
        <main className="main">
          <ActivityForm />
          <PastActivities />
        </main>
      </div>
    )
  }
}

export default App;
