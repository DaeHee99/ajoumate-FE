import logo from './logo.svg';
import './App.css';
//import router from './routes/router'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main'

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <div className="App-base">
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
