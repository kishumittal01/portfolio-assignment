import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import About from './components/About';
import Insta from './components/Insta';
import Collaborations from './components/Collaborations';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path = "/" element={(
            <>
              <Container maxWidth="xs">
                <Header />
                <Display />
                <About />
                <Insta />
                <Collaborations/>
              </Container> 
            </>
          )} 
          />
        </Routes>
        <Routes>
            <Route exact path = "/message" element={(
              <>
                <Container maxWidth="xs">
                  <ChatBox />
                </Container>
              </>
            )}
            />
        </Routes>   
      </div>
    </Router> 
  );
}

export default App;
