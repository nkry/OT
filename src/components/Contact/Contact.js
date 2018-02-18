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
      // 15 is by eye 
      // need to unify/globalize these variables/numbers
      let containerWith = (window.innerWidth - 50) - 15
      let contactWidth = containerWith - this.props.contactOffset

      const ContactWrapper = styled.div`
        top: 0;
        background: red;
        width: ${contactWidth + "px"};
        position: absolute;
        left: ${this.props.contactOffset + "px"};`;
      return <PageWrapper landingGrid={false}>
          <ContactWrapper>
            <div>CONTACT CONTACT</div>
            <div>CONTACT</div>
            <div>CONTACT</div>
          </ContactWrapper>
        </PageWrapper>;
    }
  }
}

export default Contact;
