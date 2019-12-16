import React, { Component } from 'react';
import ActivityForm from '../ActivityForm/ActivityForm';
import PastActivities from '../PastActivities/PastActivities';
import Timer from '../Timer/Timer';

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
      ],
      currentActivity: null
    }
  }

  setCurrentActivity = (currentActivity) => {
    this.setState({currentActivity});
  }

  removeCurrentActivity = () => {
    this.setState({currentActivity: null})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time My Life</h1>
        </header>
        <main className="main">
          {!this.state.currentActivity && <ActivityForm setCurrentActivity={this.setCurrentActivity} />}
          {this.state.currentActivity && <Timer removeCurrentActivity={this.removeCurrentActivity} currentActivity={this.currentActivity} />}
          <PastActivities activities={this.state.activities} />
        </main>
      </div>
    )
  }
}

export default App;
