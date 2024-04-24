// src/App.js
import { Outlet } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList/>
      <Footer/>
      <Outlet/>
    </div>
  );
}

export default App;