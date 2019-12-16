import React, { Component } from 'react';

class ActivityForm extends Component {
  constructor() {
    super();
    this.state = {
      categories: '',
      name: '',
      mins: '',
      secs: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    let newActivity = {
      categories: '',
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
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange} />
          <input
            placeholder='Minutes'
            type='number'
            name='mins'
            value={this.state.mins}
            onChange={this.handleChange} />
          <input
            placeholder='Seconds'
            type='number'
            name='secs'
            value={this.state.secs}
            onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Start Activity</button>
        </div>
      </form>
    )
  }
}

export default ActivityForm;