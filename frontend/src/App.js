import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;