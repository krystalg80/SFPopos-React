import { Outlet } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import POPOSList from './components/POPOSList/POPOSList';
import Footer from './Footer';
import POPOSDetails from './components/POPOSDetails/POPOSDetails';




function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} />
      <POPOSList/>
      <Footer/>
      <Outlet/>
      <POPOSDetails/>
    </div>
  );
}



export default App;


