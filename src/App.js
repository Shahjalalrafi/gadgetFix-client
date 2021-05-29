import './App.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ServiceDetails from './Component/Home/Services/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/service/:id'>
            <ServiceDetails />
          </Route>
        
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='*'>
            <h2>Page not found</h2>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

// http://tf.wpcashcow.com/goru/#
// https://htmldemo.hasthemes.com/hono/hono/blog-single-sidebar-left.html
// https://htmldemo.hasthemes.com/hono/hono/index-4.html
