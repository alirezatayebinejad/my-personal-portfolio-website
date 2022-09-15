import './App.css';
import Header from './Components/Header/Header';
import { Home } from './Pages/Home';

function App() {

  return (
    <div className="app">

      <div className="app__container">
        <Header />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />


        {/* for background */}
        <div className="app__particles" >
          <ul className="app__cubes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
    </div>
  );
}

export default App;
