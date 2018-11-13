import React, { Component } from "react";
import SearchBox from "./search-box.jsx";
import { navigate } from "@reach/router";

class SearchParams extends Component {
  handleSubmit() {
    navigate("/");
  }

  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSubmit} />
      </div>
    );
  }
}

export default SearchParams;
