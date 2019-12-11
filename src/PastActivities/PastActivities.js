import React from 'react';
import Activity from '../Activity/Activity';

const PastActivities = ({activities}) => {
  const displayActivities = activities.map(activity => <Activity activity={activity} key={activity.name+activity.category} />);

  return (
    <section className='PastActivities'>
      <h2>Past Activities</h2>
      {displayActivities}
    </section>
  )
}

export default PastActivities;