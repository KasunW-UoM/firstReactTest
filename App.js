import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [spices, setSpices] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{spices.length} ZEN LOTUS spices</h3>
        <List spices={spices} />
        <button onClick={() => setSpices([])}>Now Clear all</button>
      </section>
    </main>
  );
}

export default App;
