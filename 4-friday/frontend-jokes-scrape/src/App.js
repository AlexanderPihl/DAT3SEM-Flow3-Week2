import React, { useState } from "react";
import "./style.css"
import AllJokes from './AllJokes';
import AllScrape from './Scrape';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const Header = ({ isLoggedIn, loginMsg }) => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/jokes">Jokes</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink activeClassName="selected" to="/scrape">Scrape</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink activeClassName="selected" to="/login-out">{loginMsg}</NavLink>
      </li>
    </ul>
  );
}

function Login({ isLoggedIn, loginMsg, setLoginStatus }) {
  const handleBtnClick = () => {
    setLoginStatus(!isLoggedIn);
  };
  return (
    <div>
      <h2>{loginMsg}</h2>
      <button onClick={handleBtnClick}>{loginMsg}</button>
    </div>
  );

}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    //history.push("/");
  }
  return (
    <Router>
      <div>
        <Header
          loginMsg={isLoggedIn ? "Logout" : "Login"}
          isLoggedIn={isLoggedIn}
        />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Route path="/scrape">
              <Scrape />
            </Route>
            <Route path="/login-out">
              <Login
                loginMsg={isLoggedIn ? "Logout" : "Login"}
                isLoggedIn={isLoggedIn}
                setLoginStatus={setLoginStatus}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Jokes() {
  return (
    <div>
      <h2>Jokes</h2>
      <AllJokes />
    </div>
  );
}

function Scrape() {
  return (
    <div>
      <h2>Scrape</h2>
      <AllScrape />
    </div>
  );
}


