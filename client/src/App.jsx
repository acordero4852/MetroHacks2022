import Landing from './pages/Landing';
import Nearest from './pages/Nearest';
import Hospital from './pages/Hospital';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

export default function App() {
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
