import React from 'react';

const ActivityForm = () => {
  return (
    <form className='ActivityForm'>
      <h2>New Activity</h2>
      <p>Select a category:</p>
      <button>Study</button>
      <button>Meditate</button>
      <button>Exercise</button>
      <input placeholder='Name Activity'/>
      <input placeholder='Minutes' />
      <input placeholder='Seconds' />
      <button>Start Activity</button>
    </form>
  )
}

export default ActivityForm;