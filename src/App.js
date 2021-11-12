import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Destination from './pages/destination';
import Technology from './pages/technology';
import Crew from './pages/crew';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/destination">destination</Link>
          <Link to="/crew">crew</Link>
          <Link to="/technology">technology</Link>
        </header>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
