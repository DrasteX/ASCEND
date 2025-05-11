import './App.css';
import NavBar from './assets/components/jsx/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/jsx/home.jsx';
import Inventory from './assets/components/jsx/inventory.jsx';
import Quests from './assets/components/jsx/quests.jsx';
import UserInfo from './assets/components/jsx/userinfo.jsx';
import Login from './assets/components/jsx/account.jsx';
import QuestInfo from './assets/components/jsx/questinfo.jsx';


function App() {
    // State to manage login status
    const whoami = sessionStorage.getItem('whoami');
    
    var isLoggedIn;
    if (whoami!== null) {
      isLoggedIn = JSON.parse(whoami).isLoggedIn;
    }
    else {
      isLoggedIn = false;
      sessionStorage.setItem('whoami', JSON.stringify({username:'',isLoggedIn: false}));
    }

    if (isLoggedIn === true) {
      return (
        <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/quests" element={<Quests />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/questinfo/:questid" element={<QuestInfo />} />
              </Routes>
              <NavBar />
            </Router>
        
        </div>
      );
    } else {
      return (
        <div className="App">
          <Login/>
        </div>
      )
    }
  
}

export default App;
