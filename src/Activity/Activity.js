import React from 'react';

const Activity = ({activity}) => {
  return (
    <article className='activityCard'>
      <h3 className='activityText'>{activity.category}</h3>
      <p className='activityText'>{activity.mins} MIN {activity.secs} SECONDS</p>
      <p className='activityText'>{activity.name}</p>
    </article>
  )
}

export default Activity;