import React from "react";
import axios from "axios";
import "./App.css";
export default class App extends React.Component {
  state = {
    films: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/").then((response) => {
      this.setState({ films: response.data });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <ul className="films">
          {films.map((film) => (
            <li className="film">
              <p>
                <strong>Name:</strong> {film.name}
              </p>
              <p>
                <strong>Year:</strong> {film.releaseYear}
              </p>
              <p>
                <strong>Blame:</strong> {film.blame}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
