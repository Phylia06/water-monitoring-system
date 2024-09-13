import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import Repopage from './components/Repopage/Repopage';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Landing" element={<Landing />} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/Repopage" element={<Repopage />} /> 
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
