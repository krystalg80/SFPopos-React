import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import POPOSList from './POPOSList';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} />
      <POPOSList/>
      <Footer/>
    </div>
  );
}



export default App;


