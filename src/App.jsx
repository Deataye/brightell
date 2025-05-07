// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Bright from './pages/Bright';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bright />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
