import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';

import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Play from './components/pages/Play';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="current-page">
            <Switch className="navbar-switch">
              <Route path='/' exact component={Home} />
              <Route path='/play' exact component={Play} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
