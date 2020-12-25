import React from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: "20px" }}>
        <form>
          <TextField
            fullWidth
            label="Search..."
            onChange={(e) => this.handleChange(e)}
          ></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
