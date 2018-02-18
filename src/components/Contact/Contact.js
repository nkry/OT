import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.action.setCurrentPage("contact");
  }

  render() {
    if (this.props.contactOffset === false) {
      return (
        <div></div>
      )
    }
    else {
      const ContactWrapper = styled.div`
        top: 0;
        width: 50vw;
        position: absolute;
        left: ${this.props.contactOffset + "px"};`;
      return (
       <PageWrapper landingGrid={false}>
        <ContactWrapper>
          <div>CONTACT</div>
          <div>CONTACT</div>
          <div>CONTACT</div>
        </ContactWrapper>
       </PageWrapper>
      )
    }
  }
}

export default Contact;
