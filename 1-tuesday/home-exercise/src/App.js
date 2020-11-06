import './App.css';
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  Prompt
} from "react-router-dom";

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>

  )
}

function Home() {
  return (
    <h1>hej med dig</h1>
  )
}

function Products(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        {props.bookFacade.getBooks().map(element =>
          <li key={element.id}>
            {element.title} <Link to={`${url}/${element.id}`}>details</Link>
          </li>)}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a book.</h3>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={props.bookFacade} />
        </Route>
      </Switch>
    </div>
  );
}

function Details(props) {
  let { bookId } = useParams();
  return (
    <fieldset>
      <legend>Book detail:</legend>
      <p>
        Id: {props.bookFacade.findBook(bookId).id}
        <br />
        Title: {props.bookFacade.findBook(bookId).title}
        <br />
        Info: {props.bookFacade.findBook(bookId).info}
      </p>
    </fieldset>
  );
}

function FindBook(props) {
  const emptyBook = { id: "", title: "", info: "" };
  const [info, setInfo] = useState();
  const [bookId, setBookId] = useState();
  const [findBookId, setFindBookId] = useState();

  const handleChange = (evt) => {
    const id = evt.target.value;
    setBookId(id);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFindBookId(bookId);
    setBookId(emptyBook);
  }

  const deleteBook = (evt) => {
    evt.preventDefault();
    const id = evt.target.value;
    console.log("delete: " + JSON.stringify(id));
    props.bookFacade.deleteBook(id);
    setInfo('Book with Id: ' + id + ' deleted');
  }


  return (
    <div>
      <h2>Find Book</h2>
      <form onChange={handleChange}>
        <input
          id="id"
          placeholder="Enter book id"
        />
        <button onClick={handleSubmit}>Find book</button>
      </form>

      <fieldset>
        <legend>Book detail:</legend>
        <p>
          Id: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).id}
          <br />
        Title: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).title}
          <br />
        Info: {props.bookFacade.findBook(findBookId) && props.bookFacade.findBook(findBookId).info}
        </p>

        <form>
          <div>{info}</div>
          <button onClick={deleteBook} value={findBookId}>Delete Book</button>
        </form>

      </fieldset>

    </div>
  )
}

function Company() {
  return (
    <h1>hej med dig</h1>
  )

}

function AddBook(props) {
  const [book, setBook] = useState();
  let [isBlocking, setIsBlocking] = useState(false);


  const handleChange = evt => {
    const { id, value } = evt.target;
    setBook({ ...book, [id]: value });
    setIsBlocking(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.bookFacade.addBook(book);
    setIsBlocking(false);
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form>
        <input
          id="title"
          placeholder="Add title"
          onChange={handleChange}
        />
        <br />
        <input
          id="info"
          placeholder="Add info"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Save</button>
      </form>
      <Prompt
        when={isBlocking}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    </div>
  )
}

function NoMatch() {
  //let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{window.pathname}</code>
      </h3>
    </div>
  )
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>
        ID: {id}
      </h3>
    </div>
  )
}

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
