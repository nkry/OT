import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.action.setCurrentPage("contact");
  }

  render() {
    return <div id="page--transition">Contact Page</div>;
  }
}

export default Contact;
