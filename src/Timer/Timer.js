import React from 'react';

const Timer = ({removeCurrentActivity, currentActivity, mins, secs, startTimer}) => {
  if (mins !== 0 || secs !== 0) {
    startTimer()
  }

  return (
    <section className='ActivityForm'>
      <h3>{currentActivity.name}</h3>
      <p>Time Remaining: {mins}:{secs < 10 ? `0${secs}` : secs}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={removeCurrentActivity}>Cancel Activity</button>
    </section>
  )
}

export default Timer;