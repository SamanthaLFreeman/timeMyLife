import React, { Component } from 'react';
import ActivityForm from '../ActivityForm/ActivityForm';
import PastActivities from '../PastActivities/PastActivities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [
        {
          category: 'Study',
          name: 'Test',
          mins: '05',
          secs: '30'
        }
      ]
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
          <PastActivities activities={this.state.activities} />
        </main>
      </div>
    )
  }
}

export default App;
