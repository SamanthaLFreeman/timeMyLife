import React, { Component } from 'react';

class ActivityForm extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleSubmit = () => {
    let newActivity = {
      name: '',
      mins: '',
      secs: ''
    }
    this.props.setCurrentActivity(newActivity)
  }

  render() {
    return (
      <form className='ActivityForm'>
        <h2>New Activity</h2>
        <p>Select a category:</p>
        <div className='categories'>
          <button>Study</button>
          <button>Meditate</button>
          <button>Exercise</button>
        </div>
        <div className='inputs'>
          <input
            placeholder='Name Activity'
            type='text' />
          <input
            placeholder='Minutes'
            type='number' />
          <input
            placeholder='Seconds'
            type='number' />
          <button onClick={this.handleSubmit}>Start Activity</button>
        </div>
      </form>
    )
  }
}

export default ActivityForm;