import './App.css';
import NavBar from './assets/components/jsx/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/jsx/home.jsx';
import Inventory from './assets/components/jsx/inventory.jsx';
import Quests from './assets/components/jsx/quests.jsx';
import UserInfo from './assets/components/jsx/userinfo.jsx';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
      <NavBar />
    </Router>
    
    
    
    </div>
  );
}

export default App;
