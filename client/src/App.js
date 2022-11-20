
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hospital from './pages/Hospital';
import Nearest from './pages/Nearest';
import Landing from './pages/Landing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/nearest" element={<Nearest />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </div>
  );
}

export default App;
