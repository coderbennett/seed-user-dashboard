import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
