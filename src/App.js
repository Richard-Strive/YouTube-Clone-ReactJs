import React from "react";
import ReactDom, { render } from "react-dom";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetails, VideoList } from "./components";
import axios from "axios";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  componentDidMount = () => {
    this.handleSubmit("Feeling good like a should");
  };
  handleSubmit = async (searchTerm) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 5,
            key: "AIzaSyDb-g7xAyI-YWYS-_LUvqbZNYQD2mb39ys",
            q: searchTerm,
          },
        }
      );

      this.setState({
        video: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { selectedVideo, video } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={video} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
