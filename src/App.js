import React from 'react';


import Header from './components/header';
import Messages from './components/messages';

function App() {
  return (
    <div>
      <div>
          <Header/>
      </div>
      <div>
          <Messages />
      </div>
    </div>
  );
}

export default App;
