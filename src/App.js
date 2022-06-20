import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
