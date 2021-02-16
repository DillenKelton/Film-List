import React from "react";
import axios from "axios";

export default class AddFilm extends React.Component {
  state = {
    uploadedPoster: null,
  };

  addFilmClick() {
    console.log(this.state.uploadedPoster);
    /*
    const filmName = document.getElementById("filmName").value;
    const releaseYear = document.getElementById("releaseYear").value;
    const dateWatched = document.getElementById("dateWatched").value;
    const blame = document.getElementById("blame").value;

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/addFilm`,
      data: {
        name: filmName,
        releaseYear: releaseYear,
        dateWatched: dateWatched,
        blame: blame,
        poster: filmName.trim() + releaseYear, // add file extension
        tags: [], // TODO
      },
    }); */
  }

  posterUploadChange = (event) => {
    this.setState({ uploadedPoster: event.target.files[0] });
  };

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
        <input
          type="file"
          id="posterUpload"
          onChange={this.posterUploadChange}
        ></input>
        <button type="button" onClick={() => this.addFilmClick()}>
          Add
        </button>
      </div>
    );
  }
}
