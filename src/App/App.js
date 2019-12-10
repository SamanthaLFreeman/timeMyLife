import React from 'react';
import ActivityForm from '../ActivityForm/ActivityForm';
import PastActivities from '../PastActivities/PastActivities';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Time My Life</h1>
      </header>
      <ActivityForm />
      <PastActivities />
    </div>
  );
}

export default App;
