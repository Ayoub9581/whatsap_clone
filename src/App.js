import React from 'react';
// Components
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import './App.css';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
