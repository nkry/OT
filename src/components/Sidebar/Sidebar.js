import React, { Component } from "react";
import styled, { css } from "styled-components";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const self = this;
    // --- make blue a global variable ---
    this.sidebar = styled.div`
      width: calc(100vw - 45px);
      height: 100vh;
      background: #0b017a;
      position: fixed;
      z-index: 11;
      transition: left 1s ease-out;
      left: ${props => (self.props.sidebarOpen ? "45px" : "calc(100vw - 45px)")};`;
    this.sidebarText = styled.div`
      color: white;
      font-size: 1em;
    `;
  }

  handleOpenClick() {
    // temp 
    if (!this.props.sidebarOpen) {
      this.props.action.openSidebar()
    }
    else {
      this.props.action.closeSidebar()
    }
  }

  render() {
    const self = this;

    // to apply transitions, styles must be outside of render method
    const Sidebar = this.sidebar;
    const SidebarText = this.sidebarText;
    let featuredNum = "(" + " " + this.props.currentFeature + " " + ")"

    return (
      <Sidebar onClick={this.handleOpenClick.bind(this)} >
        <SidebarText>{featuredNum}</SidebarText>
      </Sidebar>
    );
  }
}

export default Sidebar;
