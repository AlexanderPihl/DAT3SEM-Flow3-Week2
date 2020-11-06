import React from "react";
import "./style.css"
import AllJokes from "./AllJokes.js"
import AllScrape from "./Scrape.js"
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";

const Header = ({ isLoggedIn, loginMsg }) => {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/jokes">Jokes</NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink exact activeClassName="selected" to="/scrape">Scrape</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink exact activeClassName="selected" to="/login-out">Login/Logout</NavLink>
        {loginMsg}
      </li>

    </ul>
  );
}

const Content = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    history.push("/")
  }

  return (
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
  );
}


export default function BasicExample() {


  return (
    <Router>
      <div>
        <Header />
        <Content />
      </div>
    </Router>
  );
}

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
      <AllScrape />
    </div>
  );
}

function Login({ isLoggedIn, loginMsg, setLoginStatus }) {
  const handleBtnClick = () => {
    setLoginStatus(!isLoggedIn);
  }

  return (
    <div>
      <h2>{loginMsg}</h2>
      <button onClick={handleBtnClick}> {loginMsg}</button>
    </div>
  );
}

