import React, { Component } from "react";

class Collection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.action.setCurrentPage('collection')
  }

  render() {
    return (
      <div id="page--transition">Collection Page</div>
    )
  }
}

export default Collection;
