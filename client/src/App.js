import React from "react";
import axios from "axios";
export default class App extends React.Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.stateTimer = setInterval(() => this.updateState(), 1000); // updates state on timer
  }

  componentWillUnmount() {
    clearInterval(this.stateTimer);
  }

  updateState() {
    axios.get(process.env.REACT_APP_API_URL).then((response) => {
      this.setState({ films: response.data });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <ul className="films">
          {films.map((film) => (
            <li className="film" key={film._id}>
              <img src={"posters/" + film.poster} alt="No poster"></img>
              <p>
                <strong>Name:</strong> {film.name}
              </p>
              <p>
                <strong>Year:</strong> {film.releaseYear}
              </p>
              <p>
                <strong>Watched:</strong> {film.dateWatched}
              </p>
              <p>
                <strong>Blame:</strong> {film.blame}
              </p>
              <p>
                <strong>Tags:</strong> {film.tags}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
