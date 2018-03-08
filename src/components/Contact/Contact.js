import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../utils/Styles";
import { Markup } from "interweave";

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

      if (this.props.data.length === 0) {
        // loader 
        return <div></div>
      }
      else {
        const contact = this.props.data.data.content.contact;
        // need to unify/globalize these variables/numbers
        let containerWith = (window.innerWidth - 50) - 15
        let contactWidth = containerWith - this.props.contactOffset

        const ContactWrapper = styled.div`
          top: 0;
          width: ${contactWidth + "px"};
          position: absolute;
          left: ${this.props.contactOffset + "px"};
          & a {
            color: #000;
            text-decoration: none;
          }
          `;
          
        return (
          <PageWrapper landingGrid={false}>
            <ContactWrapper>
              <Markup content={contact} />
            </ContactWrapper>
          </PageWrapper>
        )
      }
    }
  }
}

export default Contact;
