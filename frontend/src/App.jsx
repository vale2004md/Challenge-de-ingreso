import React from 'react';
import ToDo from './components/TaskList.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="bg-blue-500 text-white p-4 rounded">
        ¡Tailwind v4 funcionando!
      </div>
      <ToDo />
    </div>
  );
}

export default App;
