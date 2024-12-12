import React, { useState } from 'react';
import Data from './components/Data';
import './App.css';
import { Virtuoso } from 'react-virtuoso';

function App() {
  const [users] = useState(Data); // Initialize with the data array

  return (
    <div>
      <Virtuoso
      className='container'
        style={{ height: '200px' }}
        data={users}
        itemContent={(_, item) => (
          <div key={item.id} className="users">
            <p>ID: {item.id}</p>
            <p>Name: {item.users}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;
