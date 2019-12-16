import React from 'react';

const Timer = ({removeCurrentActivity, currentActivity}) => {
  return (
    <section className='ActivityForm'>
      <h3>{currentActivity.name}</h3>
      <p>{currentActivity.mins}:{currentActivity.secs}</p>
      <button>Start</button>
      <button onClick={removeCurrentActivity}>Cancel Activity</button>
    </section>
  )
}

export default Timer;