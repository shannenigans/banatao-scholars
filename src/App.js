import logo from './logo.svg';
import './App.css';
import Directory from './pages/Directory';
import MenuAppBar from './components/MenuAppBar';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Directory />
    </div>
  );
}

export default App;
