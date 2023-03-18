import './App.css';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Router from './routes/Router'
function App() {
  return (
    <div>
      <Header />
      <Router />
      <Navigation />
    </div>
  );
}

export default App;