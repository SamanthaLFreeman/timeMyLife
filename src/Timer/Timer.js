import React from 'react';

const Timer = ({removeCurrentActivity}) => {
  return (
    <section className='ActivityForm'>
      <h3>Name</h3>
      <p>Timer</p>
      <button>Start</button>
      <button onClick={removeCurrentActivity}>Cancel Activity</button>
    </section>
  )
}

export default Timer;