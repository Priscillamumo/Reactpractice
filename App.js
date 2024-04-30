import './App.css';
import {BrouserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router> 
        <navbar/>
        
        <Routes>
          <Route path="/" />
          <Route path="/cart"/>
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;

