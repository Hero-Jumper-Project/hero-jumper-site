import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';

import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import More from './components/pages/More';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="current-page">
            <Switch className="navbar-switch">
              <Route path='/' exact component={Home} />
              <Route path='/more' exact component={More} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
