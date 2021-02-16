import React from "react";
import axios from "axios";

export default class AddFilm extends React.Component {
  addFilmClick() {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/addFilm`,
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
        <label htmlFor="releaseYear">Year: </label>
        <input type="text" id="releaseYear"></input>
        <label htmlFor="dateWatched">Watched: </label>
        <input type="text" id="dateWatched"></input>
        <label htmlFor="blame">Blame: </label>
        <input type="text" id="blame"></input>
        <label htmlFor="posterUpload">Poster: </label>
        <input type="file" id="posterUpload"></input>
        <button type="button" onClick={this.addFilmClick}>
          Add
        </button>
      </div>
    );
  }
}
