import './App.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ServiceDetails from './Component/Home/Services/ServiceDetails';
import AdminPannel from './Component/Dashboard/AdminPannel/AdminPannel';
import AddService from './Component/Dashboard/AddService/AddService';
import Login from './Component/Home/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Service from './Component/Dashboard/Service/Service';
import BookedList from './Component/Dashboard/BookedList/BookedList';

export const UserContext = createContext()

function App() {
  const [logedInUser, setLogesInUser] = useState({})
  return (
    <UserContext.Provider value={[logedInUser, setLogesInUser]} className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <PrivateRoute path='/service/:id'>
            <ServiceDetails />
          </PrivateRoute>

          <PrivateRoute path='/dashboard'>
            <AdminPannel />
          </PrivateRoute>

          <PrivateRoute path='/addService'>
            <AddService />
          </PrivateRoute>
          
          <PrivateRoute path='/all-services'>
            <Service />
          </PrivateRoute>
          
          <PrivateRoute path='/booking-list'>
            <BookedList />
          </PrivateRoute>
          
          <Route path='/login'>
            <Login />
          </Route>
        
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='*'>
            <h2>Page not found</h2>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

// http://tf.wpcashcow.com/goru/#
// https://htmldemo.hasthemes.com/hono/hono/blog-single-sidebar-left.html
// https://htmldemo.hasthemes.com/hono/hono/index-4.html
