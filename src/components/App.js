import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import MenuContainer from './Menu/MenuContainer'
import SidebarContainer from "./Sidebar/SidebarContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../utils/Rules";
import { device } from "../utils/Rules";

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile,
    sidebarOpen: state.sidebarOpen,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  };
}

class Container extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoClick() {
    if (this.props.sidebarOpen) {
      this.props.action.closeSidebar();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.pathname === '/collection') {
      if (nextProps.data === this.props.data && nextProps.currentPage === this.props.currentPage) {
        return false;
      }
      else {
        return true
      }
    }
    else {
      return true
    }
  }

  render() {
    const assets = process.env.PUBLIC_URL + "/assets/";

    // all should be made global
    let singleMargin = 20;
    let pageMargin = singleMargin * 2;
    let menuHeight = 50;
    let sidebarWidth = 50;
    let minusContainer = sidebarWidth + pageMargin + "px";
    let winHeight = window.innerHeight - menuHeight;
    let containerHeight = winHeight - singleMargin;

    // main wrapper for content which sits in grid
    const AppWrapper = styled.div`
      top: 50px;
      left: ${singleMargin + "px"};
      position: absolute;
      width: calc(100% - ${minusContainer});
      display: grid;
      height: ${containerHeight + "px"};
      grid-template-rows: repeat(3, calc(33.3% - 20px));
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0 10px;
      @media ${device.mobilePortrait} {
        width: calc(100vw - 40px);
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      }
      @media ${device.mobileLandscape} {
        width: calc(100% - ${minusContainer});
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      }
    `;

    const Logo = styled.img`
      z-index: 2;
      width: 7px;
      position: fixed;
      max-height: 70%;
      top: 50%;
      transform: translateY(-50%);
      media ${device.mobilePortrait} {
        width: 6px;
      }
      media ${device.mobileLandscape} {
        width: 6px;
      }`;

    return (
      <div className="app--wrapper">
        <MenuContainer location={this.props.location} />
        <SidebarContainer location={this.props.location} />
        <AppWrapper>
          <Link to="/">
            <Logo
              src={assets + "logo.svg"}
              onClick={this.handleLogoClick.bind(this)}
            />
          </Link>
          {this.props.children}
        </AppWrapper>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);
export default App;