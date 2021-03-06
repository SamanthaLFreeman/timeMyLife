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
      currentActivity: null,
      mins: null,
      secs: null
    }
  }

  setCurrentActivity = (currentActivity, mins, secs) => {
    this.setState({currentActivity, mins, secs});
  }

  removeCurrentActivity = () => {
    this.setState({
      currentActivity: null,
      mins: 0,
      secs: 0
    })
  }

  startTimer = () => {
    const { mins, secs } = this.state
    this.myInterval = setTimeout(() => {
      if (secs > 0) {
        this.setState({
          secs: secs - 1
        })
      }
      if (mins === 0 ) {
        if (secs !== 0) {
          clearTimeout(this.myInterval)
        } else {
          this.setState({
            mins: mins - 1,
            secs: 59,

          })
        }
      }
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time My Life</h1>
        </header>
        <main className="main">
          {!this.state.currentActivity && <ActivityForm setCurrentActivity={this.setCurrentActivity} />}
          {this.state.currentActivity && <Timer removeCurrentActivity={this.removeCurrentActivity} currentActivity={this.state.currentActivity}
          mins={this.state.mins}
          secs={this.state.secs}
          startTimer={this.startTimer} />}
          <PastActivities activities={this.state.activities} />
        </main>
      </div>
    )
  }
}

export default App;
