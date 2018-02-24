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
      // resize event is the issue?
      console.log("contact offset", this.props.contactOffset);

      // 15 is by eye 
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
        
      return <PageWrapper landingGrid={false}>
          <ContactWrapper>
            <div>INQUIRIES</div>
            <div><a href="mailto:hello@oveliatranstoto.com">hello@oveliatranstoto.com</a></div>
            <br />
            <div>PRESS</div>
            <div><a href="mailto:press@davidsiwicki.com">david@davidsiwicki.com</a></div>
            <br />
            <div>INSTAGRAM</div>
            <div><a href="https://www.instagram.com/oveliatranstoto/" target="_blank">@oveliatransto</a></div>
          </ContactWrapper>
        </PageWrapper>;
    }
  }
}

export default Contact;
