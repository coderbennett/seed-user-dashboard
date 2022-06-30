import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SpaceFlightNews from './components/SpaceFlightNews';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <div id="content">
          <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/space-flight-news" element={<SpaceFlightNews />}/>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
