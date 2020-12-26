import React from "react";
// import ReactDom, { render } from "react-dom";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

import { SearchBar } from "./components";

class App extends React.Component {
  handleSubmit = async (searchTerm) => {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyDb-g7xAyI-YWYS-_LUvqbZNYQD2mb39ys",
          q: searchTerm,
        },
      });

      console.log(youtube);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* <VideoDetails /> */}
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
