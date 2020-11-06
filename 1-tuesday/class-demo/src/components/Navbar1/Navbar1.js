import React from "react";
import "./style2.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
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

const Header = () => {
    return (
        <>
            <ul className="header">
                <li>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="selected" to="/exercise1">Exercise 1</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="selected" to="/exercise2">Exercise 2</NavLink>
                </li>
            </ul>

            <hr />
        </>
    )
}

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/exercise1">
                    <Exercise1 />
                </Route>
                <Route path="/exercise2">
                    <Exercise2 />
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

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h1>Home of Alexander Pihl - DAT3SEM</h1>
            <p>Check one of the links out in the navbar</p>
        </div>
    );
}

function Exercise1() {
    return (
        <div>
            <h2>Exercise 1</h2>
        </div>
    );
}

function Exercise2() {
    return (
        <div>
            <h2>Exercise 2</h2>
        </div>
    );
}