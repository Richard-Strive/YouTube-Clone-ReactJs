import React from "react";
import ReactDom, { render } from "react-dom";
import { Grid } from "@material-ui/core";
import youtube from "./api/yotube";

import { SearchBar, VideoList, VideoDetails } from "./components";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails />
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
