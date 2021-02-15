import React from "react";
import axios from "axios";

export default class AddFilm extends React.Component {
  render() {
    return (
      <div>
        <label for="filmName">Name: </label>
        <input type="text" id="filmName"></input>
        <label for="releaseYear">Year: </label>
        <input type="text" id="releaseYear"></input>
        <label for="dateWatched">Watched: </label>
        <input type="text" id="dateWatched"></input>
        <label for="blame">Blame: </label>
        <input type="text" id="blame"></input>
      </div>
    );
  }
}
