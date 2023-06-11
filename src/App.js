
import './App.css';
import Index from "./Pages/index";
import About from './Pages/About';
import Statistic from './Pages/Statistic';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Statistic" element={<Statistic/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
