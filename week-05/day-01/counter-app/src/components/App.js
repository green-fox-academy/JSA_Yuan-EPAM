import React from 'react';
import VisibleIncreaser from '../container/VisibleIncreaser'
import VisibleDecreaser from '../container/VisibleDecreaser'


  function App() {
    return (
      <div>
        <p>Redux 101</p>
        <VisibleIncreaser />
        <VisibleDecreaser />
      </div>
    );
  }

export default App;
