import React from "react";
import axios from "axios";

export default class AddFilm extends React.Component {
  addFilmClick() {
    axios({
      method: "post",
      url: "http://72.133.97.71:5000/addFilm",
      data: {
        name: document.getElementById("filmName").value,
        releaseYear: document.getElementById("releaseYear").value,
        dateWatched: document.getElementById("dateWatched").value,
        blame: document.getElementById("blame").value,
        poster: "N/A",
        tags: [],
      },
    });
  }

  render() {
    return (
      <div className="addFilmForm">
        <label htmlFor="filmName">Name: </label>
        <input type="text" id="filmName"></input>
        <br />
        <label htmlFor="releaseYear">Year: </label>
        <input type="text" id="releaseYear"></input>
        <br />
        <label htmlFor="dateWatched">Watched: </label>
        <input type="text" id="dateWatched"></input>
        <br />
        <label htmlFor="blame">Blame: </label>
        <input type="text" id="blame"></input>
        <br />
        <button type="button" onClick={this.addFilmClick}>
          Add
        </button>
      </div>
    );
  }
}
