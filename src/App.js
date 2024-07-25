import logo from './logo.svg';
import './App.css';
import Directory from './pages/Directory';
import MenuAppBar from './components/MenuAppBar';
import History from './pages/History';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Directory />
      <History />
    </div>
  );
}

export default App;
