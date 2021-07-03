import './App.css';
import NavBar from './components/NavBar'
import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Homepage/>
        <Footer/>
    </div>
  );
}

export default App;
