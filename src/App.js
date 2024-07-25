import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Directory from './pages/Directory';
import MenuAppBar from './components/MenuAppBar';
import History from './pages/History';
import { PAGE_TITLE } from './constants/pages';
import { Container } from '@mui/material';

function App() {
  const [ page, setPage ] = React.useState(PAGE_TITLE.SCHOLAR_DIRECTORY)
  const getPage = (page) => {
    switch(page) {
      case PAGE_TITLE.HISTORY:
        return <History />
      default:
      case PAGE_TITLE.SCHOLAR_DIRECTORY:
        return <Directory />
    }
  }
  return (
    <div className="App">
      <MenuAppBar setPage={setPage}/>
      <Container>
        {getPage(page)}
      </Container>
    </div>
  );
}

export default App;
