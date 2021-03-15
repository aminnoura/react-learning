import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeLanguageAction } from '../store/actions/language';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home/Home';
import About from './about/About';

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  // const language = useSelector(state=> state.language);
  // const dispatch = useDispatch();

  // const updateLanguage = () => {
  //   dispatch(changeLanguageAction() )
  // }

  // return (
  //   <div className="App">
  //     Welcome. language is {language==="en"? "English": "Persian" }
  //     <button onClick={updateLanguage}>change Language</button>
  //   </div>
  // );
}

export default App;
