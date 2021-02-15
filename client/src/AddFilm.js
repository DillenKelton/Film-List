import React from "react";
import axios from "axios";

export default class AddFilm extends React.Component {
  render() {
    return (
      <div class="addFilmForm">
        <label for="filmName">Name: </label>
        <input type="text" id="filmName"></input>
        <br />
        <label for="releaseYear">Year: </label>
        <input type="text" id="releaseYear"></input>
        <br />
        <label for="dateWatched">Watched: </label>
        <input type="text" id="dateWatched"></input>
        <br />
        <label for="blame">Blame: </label>
        <input type="text" id="blame"></input>
        <br />
        <button type="button">Add</button>
      </div>
    );
  }
}
