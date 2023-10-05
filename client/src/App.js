import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

import ItemList from './components/ItemList';
import Welcome from './components/Welcome';
// import AddItem from './components/AddItem';
// import EditItem from './components/EditItem';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" activeClassName="active">
                Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="active">
                Search
              </NavLink>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/add" component={AddItem} /> */}
          {/* <Route path="/edit/:id" component={EditItem} /> */}
          <Route path="/" element={<Welcome />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;