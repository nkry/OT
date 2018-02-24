import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import MenuContainer from './Menu/MenuContainer'
import SidebarContainer from "./Sidebar/SidebarContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile,
    sidebarOpen: state.sidebarOpen
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
    this.state = { in: false };
  }

  componentDidMount() {
    const self = this;

    let ww = window.innerWidth;
    let resizeTimer;

    self.setState({
      in: false
    });

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        self.props.action.checkDeviceWidth(ww);
      }, 250);
    });
  }

  handleLogoClick() {
    if (this.props.sidebarOpen) {
      // could also take the sidebar out of wraped <Link> and use pushState here to '/'
      this.props.action.closeSidebar()
    }
  }

  render() {
    const assets = process.env.PUBLIC_URL + "/assets/";

    // all should be made global
    let singleMargin = 20;
    let pageMargin = singleMargin * 2;
    let menuHeight = 50
    let sidebarWidth = 50;
    let minusContainer = sidebarWidth + pageMargin + "px";
    let winHeight = window.innerHeight - menuHeight
    let containerHeight = winHeight - singleMargin

    // main wrapper for content which sits in grid
    const AppWrapper = styled.div`
      top: 50px;
      left: ${singleMargin + "px"};
      position: absolute;
      width: calc(100% - ${minusContainer});
      display: grid;
      height: ${containerHeight + 'px'};
      grid-template-rows: repeat(3, calc(33.3% - 20px));
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 0 10px;
    `;

    // max-height: 100%;
    // grid-column: span 0;
    // need to add breakpoints for fixed px width
    const Logo = styled.img`
      z-index: 2;
      width: 8px;
      position: fixed;
      max-height: 80%;
      top: 50%;
      transform: translateY(-50%);
    `;

    // // --- w.i.p ---
    // const GradientWrapper = styled.div`
    //   z-index: 2;
    //   left: 20px;
    //   width: calc(100% - 90px);
    //   background: white;
    //   height: 90px;
    //   position: fixed;
    //   top: 0;
    //   background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    //   `;

    // render gradientWrapper conditionally based on location
    return (
      <div className="app--wrapper">
        <MenuContainer location={this.props.location} />
        <SidebarContainer />
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