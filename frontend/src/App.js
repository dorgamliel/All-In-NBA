import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Injuries from './Injuries';
import Highlights from './Highlights';
import Bets from './Bets';
import Standings from './Standings';

function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/injuries' element={<Injuries/>}/>
        <Route path='/highlights' element={<Highlights/>}/>
        <Route path='/bets' element={<Bets/>}/>
        <Route path='/standings' element={<Standings/>}/>
      </Routes>
    </>
  );
}

export default App;
