import { useState, useEffect } from "react";
import "./style.css"

const AllJokes = () => {

    const [joke, setJoke1] = useState("");


    const FetchAllJokes = () => {
        fetch("http://localhost:8080/jokeFetcher/api/jokes/").then(res => res.json()).then(data => {
            setJoke1(data);

        })
    }

    useEffect(() => {
        FetchAllJokes();
    }, []);

    return (
        <div>
            <h3>Chuck Norris Joke</h3>
            <p>{joke.joke1}</p>
            <a href={joke.joke1Reference}>{joke.joke1Reference}</a>
            <br />
            <h3>Dad Joke</h3>
            <p>{joke.joke2}</p>
            <a href={joke.joke2Reference}>{joke.joke2Reference}</a>
            <br />
            <br />
            <button onClick={() => FetchAllJokes()}>Fetch new jokes</button>
        </div>
    );
}
export default AllJokes;
